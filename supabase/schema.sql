create extension if not exists pgcrypto;

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  email text not null,
  service_type text not null,
  location text not null,
  need_description text not null,
  message text,
  status text not null default 'new'
);

alter table public.quote_requests enable row level security;

-- Read and write access should be restricted to server-side service role usage.
-- Keep client-side insert disabled by default for stronger control.
