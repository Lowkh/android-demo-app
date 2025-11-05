import { danger, warn, message, fail } from "danger";

// Always show welcome
message("🤖 Danger is reviewing your PR!");

// Check title
const title = danger.github.pr.title;
if (!title.includes("feat:") && !title.includes("fix:") && !title.includes("test:")) {
  warn("⚠️ PR title should start with feat:, fix:, or test:");
}

// Check description  
const body = danger.github.pr.body || "";
if (body.length < 10) {
  warn("⚠️ Please add a description (at least 10 characters)");
}

// Show summary
message(`📝 Title: ${title}`);
message(`📝 Description length: ${body.length} chars`);
message("✅ Review complete!");
