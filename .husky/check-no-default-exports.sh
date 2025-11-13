
set -e

FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|ts|jsx|tsx)$' || true)
if [ -z "$FILES" ]; then
  exit 0
fi

for f in $FILES; do
  if git show :$f | grep -nE "export\s+default" >/dev/null 2>&1; then
    echo ""
    echo "✖ Commit blocked: staged file $f contains 'export default'."
    echo "  Please replace default exports with named exports (export const Foo = ...)."
    echo ""
    exit 1
  fi
done

exit 0
