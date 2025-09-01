/*
  # Create leads table for contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `phone_number` (text, required)
      - `email_address` (text, required, with email validation)
      - `business_info` (text, optional - for website/project ideas)
      - `submission_timestamp` (timestamp with timezone, auto-generated)
      - `created_at` (timestamp with timezone, auto-generated)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for public insert access (form submissions)
    - Add policy for authenticated admin access to read data

  3. Validation
    - Email format validation
    - Required field constraints
    - Automatic timestamp generation
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (length(trim(full_name)) > 0),
  phone_number text NOT NULL CHECK (length(trim(phone_number)) > 0),
  email_address text NOT NULL CHECK (email_address ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  business_info text DEFAULT '',
  submission_timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for form submissions
CREATE POLICY "Allow public form submissions"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all leads (for admin access)
CREATE POLICY "Allow authenticated users to read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email_address);