# Danger - Automated Code Review

message("👋 Thanks for your pull request!")

# Check PR description
if github.pr_body.length < 10
  fail("❌ Please add a description to your PR")
end

# Check PR title format
pr_title = github.pr_title
if !pr_title.start_with?("feat:") && !pr_title.start_with?("fix:") && !pr_title.start_with?("test:")
  warn("⚠️ PR title should start with: feat:, fix:, or test:")
end

# Get changed files
changed_files = git.modified_files
added_files = git.added_files || []
all_files = changed_files + added_files

# Count file types
kotlin_files = all_files.select { |f| f.end_with?('.kt') }
test_files = all_files.select { |f| f.include?('test') || f.include?('Test') }

# Suggest tests
if kotlin_files.any? && test_files.empty?
  message("💡 Consider adding tests for your Kotlin changes")
end

# Show summary
markdown <<~MARKDOWN
  ## Pull Request Summary
  
  | What | Count |
  |------|-------|
  | Files Changed | #{all_files.count} |
  | Kotlin Files | #{kotlin_files.count} |
  | Test Files | #{test_files.count} |
MARKDOWN

message("✅ Review complete!")
