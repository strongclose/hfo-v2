#!/bin/bash

# Find all files that still have <Header usage and replace with <Navigation />
find pages -name "*.tsx" -exec grep -l "<Header" {} \; | while read file; do
  echo "Processing $file"
  # Replace complex Header patterns with simple Navigation
  sed -i 's/<Header[^>]*>[^<]*<\/Header>/<Navigation \/>/g' "$file"
  # Replace self-closing Header tags  
  sed -i 's/<Header[^\/]*\/\s*>/<Navigation \/>/g' "$file"
  # Replace multi-line Header tags (more complex pattern)
  perl -i -pe 'BEGIN{undef $/;} s/<Header\s+[^>]*>\s*<\/Header>/<Navigation \/>/smg' "$file"
  perl -i -pe 'BEGIN{undef $/;} s/<Header[^\/]*\/\s*>/<Navigation \/>/smg' "$file"
done
