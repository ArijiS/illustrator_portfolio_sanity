import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'bt7zghof',
    dataset: 'production',
    apiVersion: "2026-06-15",
    useCdn: true
});