/**
 * Netlify Edge Function: OAuth Protected Resource Metadata
 * RFC 9728 — dynamically sets "resource" to the actual request origin
 * so it passes validation on both staging and production.
 */

export default async (request) => {
  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;

  const metadata = {
    resource: origin,
    authorization_servers: ["https://conversive.ai"],
    scopes_supported: ["openid", "profile", "email"],
    bearer_methods_supported: ["header"],
    resource_documentation: "https://conversive.ai/llms.txt",
    resource_name: "Conversive Care Conversations Platform"
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

export const config = { path: "/.well-known/oauth-protected-resource" };
