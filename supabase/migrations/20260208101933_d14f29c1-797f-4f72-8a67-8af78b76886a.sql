
-- Rate limiting table for contact form submissions
CREATE TABLE public.form_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL,
  identifier_type TEXT NOT NULL CHECK (identifier_type IN ('ip', 'email')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for fast lookups
CREATE INDEX idx_rate_limits_identifier_created ON public.form_rate_limits (identifier, identifier_type, created_at DESC);

-- Enable RLS
ALTER TABLE public.form_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can manage rate limits (edge function uses service role)
-- No public policies = no public access

-- Auto-cleanup: delete entries older than 24 hours
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.form_rate_limits WHERE created_at < now() - interval '24 hours';
$$;
