# This is a Danger review file

# Welcome message
message("Thanks for contributing!")

# Rule 1: Check if description is long enough
if github.pr_body.length < 10
  fail("Please write a description for your changes")
end

# Rule 2: Check if title has proper format
title = github.pr_title
if !title.include?("feat:") && !title.include?("fix:") && !title.include?("test:")
  warn("Title should start with feat: or fix: or test:")
end

# Rule 3: Warn if changes are too big
additions = github.pr_additions_count
deletions = github.pr_deletions_count
total = additions + deletions

if total > 300
  warn("This is a large change - consider making it smaller")
end

# Rule 4: Check if tests are included
files = git.modified_files + git.created_files
has_kotlin = files.any? { |f| f.include?(".kt") }
has_test = files.any? { |f| f.include?("test") }

if has_kotlin && !has_test
  message("Did you consider adding a test?")
end

# Summary table
markdown <<~TEXT
| What | Count |
|------|-------|
| Files Changed | #{files.count} |
| Lines Added | #{additions} |
| Lines Deleted | #{deletions} |
TEXT
