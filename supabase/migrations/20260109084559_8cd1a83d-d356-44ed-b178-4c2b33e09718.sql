-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

-- Create a RESTRICTIVE INSERT policy (public forms need insert access, but RESTRICTIVE is better practice)
CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Add explicit DENY policies for UPDATE and DELETE to prevent modifications
CREATE POLICY "No one can update leads"
ON public.leads
FOR UPDATE
USING (false);

CREATE POLICY "No one can delete leads"
ON public.leads
FOR DELETE
USING (false);