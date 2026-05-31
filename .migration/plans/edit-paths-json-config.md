# Edit paths.json Plan

## Current State

The `paths.json` file currently contains:

```json
{
  "mappings": [
    "/content/ets/:/",
    "/content/ets/metadata:/metadata.json",
    "/content/ets/configuration:/.helix/config.json"
  ]
}
```

## How paths.json Works

The `paths.json` file defines URL path mappings for AEM Edge Delivery Services. Each mapping entry follows the format:

```
"<content-repository-path>:<public-url-path>"
```

- **Left side** (before `:`): The path in the content repository (e.g., SharePoint, Google Drive, or AEM)
- **Right side** (after `:`): The public-facing URL path where the content is served

## How to Edit

To edit `paths.json` in this workspace, you can:

1. **Replace the content path prefix** — Change `/content/ets/` to your site's actual content path
2. **Add new mappings** — Append entries to the `mappings` array for additional path rewrites
3. **Modify existing mappings** — Change the public URL path or content path for any entry
4. **Remove mappings** — Delete entries that are no longer needed

## Example Updated File

```json
{
  "mappings": [
    "/content/your-site/:/",
    "/content/your-site/metadata:/metadata.json",
    "/content/your-site/configuration:/.helix/config.json"
  ]
}
```

## Checklist

- [ ] Determine the correct content repository path prefix for your site
- [ ] Update all three mapping entries with the new prefix
- [ ] Verify the public URL paths (right side of `:`) are correct for your project
- [ ] Add any additional path mappings needed (e.g., for language copies or subsites)

## Execution

To proceed with the actual edit, exit Plan mode and provide the new content path prefix you'd like to use. The file can then be updated using the Edit tool to replace `/content/ets/` with your desired path.
