-- GG Diseño: contact form schema for the new Supabase project.
create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  accept_commercial boolean default false
);

alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
grant insert on public.leads to anon, authenticated;

create policy "Public may submit contact requests"
on public.leads for insert to anon, authenticated
with check (
  length(trim(name)) between 1 and 200
  and length(trim(email)) between 3 and 320
  and length(trim(message)) between 1 and 10000
);

create table if not exists public.form_rate_limits (
  id uuid primary key default gen_random_uuid(),
  identifier text not null,
  identifier_type text not null,
  created_at timestamptz not null default now()
);
create index if not exists form_rate_limits_lookup
on public.form_rate_limits (identifier, identifier_type, created_at desc);
alter table public.form_rate_limits enable row level security;
revoke all on public.form_rate_limits from anon, authenticated;

create or replace function public.cleanup_old_rate_limits()
returns void language sql security definer
set search_path = ''
as $$ delete from public.form_rate_limits where created_at < now() - interval '2 days'; $$;
revoke all on function public.cleanup_old_rate_limits() from public, anon, authenticated;
grant execute on function public.cleanup_old_rate_limits() to service_role;
