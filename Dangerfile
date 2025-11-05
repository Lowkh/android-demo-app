# Danger - Automated Code Review

# ALWAYS show a welcome message
message("🤖 Danger is reviewing your code!")

# ALWAYS check description (this should trigger)
if github.pr_body.nil? || github.pr_body.empty? || github.pr_body.length < 5
  warn("⚠️ Please add a meaningful PR description (at least 5 characters)")
end

# ALWAYS check title (this should trigger)
pr_title = github.pr_title
unless pr_title.include?("feat:") || pr_title.include?("fix:") || pr_title.include?("test:") || pr_title.include?("chore:")
  warn("⚠️ PR title should include: feat:, fix:, test:, or chore:")
end

# ALWAYS show PR info
message("📝 PR Title: #{pr_title}")
message("📝 Description length: #{github.pr_body.length} characters")

# Show files
changed_files = git.modified_files
added_files = git.added_files || []
all_files = changed_files + added_files

message("📁 Files changed: #{all_files.count}")

all_files.each do |file|
  message("  - #{file}")
end

# ALWAYS show summary
markdown <<~MARKDOWN
  ## Danger Review Summary
  
  - **Files Changed:** #{all_files.count}
  - **PR Title:** #{pr_title}
  - **Description Length:** #{github.pr_body.length} chars
MARKDOWN

message("✅ Danger review complete!")
