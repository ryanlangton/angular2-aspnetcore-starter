using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Asp5Starter
{
    public class SpaMiddleware
    {
        private readonly RequestDelegate _next;

        public SpaMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path.Value.Contains('.'))
                await ServeRoute(context, context.Request.Path.Value);
            else
                await ServeRoute(context, "index.html");
            return;
        }

        private async Task ServeRoute(HttpContext context, string path)
        {
            // Remove leading forward slash, otherwise OWIN will look in root directory (i.e. C:\)
            if (path.StartsWith("/"))
                path = path.Substring(1);

            // If rewritten file exists, return it. Otherwise, return 404.
            if (System.IO.File.Exists(path))
                await context.Response.WriteAsync(System.IO.File.ReadAllText(path));
            else
            {
                context.Response.StatusCode = 404;
                return;
            }
        }
    }
}
