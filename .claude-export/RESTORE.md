# Claude Code — chat history & memory export

This bundle lets you continue this project's Claude Code memory and chat
history on another laptop.

## What's inside

- `memory/`   — persistent memory files (`MEMORY.md` index + fact files).
                These are what Claude auto-loads each session for this project.
- `sessions/` — full chat transcripts (`*.jsonl`). Each file is one session;
                Claude Code reads these to resume / `--continue` a conversation.

## How Claude Code stores this (important)

Claude Code keeps both under:

    ~/.claude/projects/<MANGLED_PROJECT_PATH>/

`<MANGLED_PROJECT_PATH>` is the project's **absolute path** with every `/`
replaced by `-`. On this machine the project lives at:

    /Users/pankajjajra/project/AI/spark

…so the folder is:

    -Users-pankajjajra-project-AI-spark

memory lives in that folder's `memory/` subfolder, and the `*.jsonl`
transcripts live directly in that folder.

## Restore on the new laptop

1. Copy your project to the new machine (e.g. via git or file copy).

2. Find the new project path and compute the mangled name. If you put the
   project at the SAME path (`/Users/pankajjajra/project/AI/spark`), the
   mangled name is identical — easiest case. If the username or path differs,
   replace every `/` with `-`. Example:
       /Users/jane/work/spark  ->  -Users-jane-work-spark

3. Create the target folders and copy the files in:

       NEW="$HOME/.claude/projects/<MANGLED_PROJECT_PATH>"
       mkdir -p "$NEW/memory"
       cp memory/*.md      "$NEW/memory/"
       cp sessions/*.jsonl "$NEW/"

4. Launch Claude Code from inside the project. Memory loads automatically.
   To resume a specific chat:
       claude --continue           # pick from recent sessions
       claude --resume <session-id>  # the .jsonl filename (without extension)

## Notes

- Transcripts can be large (~15 MB each); that's normal.
- Memory is the durable part — even if you skip the transcripts, copying
  `memory/` preserves what Claude knows about this project.
- Keep `.claude-export/` out of your production build (it's not referenced by
  the app and won't be served).
