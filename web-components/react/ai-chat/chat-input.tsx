// ChatInput - AI chat input area with file upload and prompt suggestions
// Source: https://21st.dev/community/components/kokonutd/ai-input/default
// Author: kokonutd (@kokonutd)
// Deps: tailwindcss, lucide-react
// Tags: ai, chat, input, prompt, file-upload, suggestions
// Description: A feature-rich AI chat input component. Includes a resizable
// textarea for typing prompts, attachment/file upload button, voice input button,
// and a send button. Shows prompt suggestion chips above the input area.
// Inspired by modern AI assistant interfaces like Claude and ChatGPT.

"use client";

import { useState, useRef } from "react";
import { ArrowUp, Paperclip, Mic, X } from "lucide-react";
import { cn } from "@/lib/utils";

const suggestions = [
    "Explain this code",
    "Write unit tests",
    "Optimize performance",
    "Add TypeScript types",
  ];

export default function ChatInput() {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
        if (!value.trim()) return;
        console.log("Sending:", value);
        setValue("");
  };

  const autoResize = () => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  };

  return (
        <div className="mx-auto w-full max-w-3xl px-4 py-6">
          {/* Suggestion chips */}
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                    <button
                                  key={s}
                                  onClick={() => setValue(s)}
                                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
                                >
                      {s}
                    </button>button>
                  ))}
              </div>div>
        
          {/* Input area */}
              <div
                        className={cn(
                                    "flex flex-col rounded-2xl border transition-all duration-200",
                                    focused
                                      ? "border-primary/60 bg-background shadow-md"
                                      : "border-border bg-muted/20"
                                  )}
                      >
                      <textarea
                                  ref={textareaRef}
                                  value={value}
                                  onChange={(e) => {
                                                setValue(e.target.value);
                                                autoResize();
                                  }}
                                  onFocus={() => setFocused(true)}
                                  onBlur={() => setFocused(false)}
                                  onKeyDown={(e) => {
                                                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                                                                e.preventDefault();
                                                                handleSend();
                                                }
                                  }}
                                  placeholder="Ask anything..."
                                  rows={3}
                                  className="w-full resize-none bg-transparent px-4 pt-4 pb-2 text-sm outline-none placeholder:text-muted-foreground"
                                />
                      <div className="flex items-center justify-between px-3 pb-3">
                                <div className="flex items-center gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                                                          <Paperclip className="h-4 w-4" />
                                            </button>button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                                                          <Mic className="h-4 w-4" />
                                            </button>button>
                                </div>div>
                                <div className="flex items-center gap-2">
                                            <span className="text-xs text-muted-foreground">
                                              {value.length > 0 && `${value.length} chars`}
                                            </span>span>
                                            <button
                                                            onClick={handleSend}
                                                            disabled={!value.trim()}
                                                            className={cn(
                                                                              "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
                                                                              value.trim()
                                                                                ? "bg-primary text-primary-foreground hover:opacity-90"
                                                                                : "bg-muted text-muted-foreground cursor-not-allowed"
                                                                            )}
                                                          >
                                                          <ArrowUp className="h-4 w-4" />
                                            </button>button>
                                </div>div>
                      </div>div>
              </div>div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                      Press Cmd+Enter to send
              </p>p>
        </div>div>
      );
}
</div>
