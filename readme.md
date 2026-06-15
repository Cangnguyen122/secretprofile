You are now working on an EXISTING birthday microsite project.

This is not a rebuild task.

Act like a senior frontend engineer, UI/UX reviewer, motion designer, and code maintainer. Your goal is to improve the current implementation carefully without breaking the existing website.

## Core rule

Do not rewrite the project from scratch.

Do not replace the current architecture unless it is clearly broken.

Do not add random new libraries, 3D effects, page structures, or visual concepts unless they directly fix a real issue in the existing implementation.

Preserve the current creative direction:

* Strong troll opening
* Fake scan / fake investigation
* Runaway button interaction
* Emotional reveal
* Video wishes section
* Couple timeline
* Memory gallery
* Explosive final celebration

The purpose of this prompt is to help you reason better, review better, and polish the existing website — not to redesign everything.

## Working principles

Follow these four principles:

### 1. Think before coding

Before editing files:

* Inspect the project structure.
* Identify the current tech stack.
* Identify the existing components and data/config files.
* Understand how the current page flow works.
* Check whether the website already has the required sections.
* Do not assume missing requirements unless the code clearly shows they are missing.
* If something is missing, add the smallest reasonable placeholder and document where to replace it.

Before making changes, briefly state:

* What already works
* What feels weak or buggy
* What you will improve
* What you will not touch

### 2. Simplicity first

Prefer simple, maintainable improvements.

Do not over-engineer.

Avoid:

* Adding state managers
* Adding heavy animation libraries
* Adding 3D unless already present
* Replacing Tailwind/component structure unnecessarily
* Creating overly generic abstractions
* Adding features that were not requested

Use the existing stack as much as possible.

If the project already uses Framer Motion, continue using Framer Motion.

If the project already uses Tailwind, continue using Tailwind.

If the project already has a central config file, keep improving around that config file instead of hardcoding content elsewhere.

### 3. Surgical changes

Make targeted improvements only.

Do not:

* Rewrite all components
* Rename files randomly
* Change the whole color system
* Change the whole layout structure
* Replace working sections
* Reformat unrelated files
* Remove existing content
* Break customization points

Only change code that helps one of these goals:

* Better UX
* Smoother transitions
* Better mobile layout
* More stable runaway button
* Cleaner video fallback
* Better gallery/lightbox behavior
* Better final celebration
* Better performance
* Better accessibility
* Fixing build/runtime errors

### 4. Goal-driven verification

Every change must have a clear reason.

For each improvement, think in this format:

* Problem:
* Change:
* Expected result:
* How to verify:

After editing, run available checks if scripts exist:

* npm run build
* npm run lint
* npm run typecheck

Only run scripts that exist in package.json.

If a check fails, fix the issue and run it again.

## UI/UX quality target

The website should feel like:

“A funny secret case file that transforms into an emotional birthday cinema, then ends as a colorful digital birthday party.”

Do not copy external websites.

Use this as design guidance only:

* Codrops-style creativity: use only for tasteful transitions, glitch, gallery reveal, and micro-interactions.
* Magic UI-style polish: use only for gradients, glow, glass cards, buttons, and premium spacing.
* shadcn/ui-style discipline: use only for accessible buttons, dialogs, cards, and clean composition.
* Motion/Framer Motion-style animation: use for controlled section reveals, button motion, modal transitions, and final celebration.
* Runaway button pattern: preserve the joke, but make it usable and not frustrating.

Do not turn the project into a random animation playground.

## Priority review areas

Review and improve in this order.

### 1. Existing page flow

Check that the emotional journey is clear:

1. Troll opening
2. Fake scan
3. Runaway button
4. Emotional reveal
5. Video wishes
6. Timeline
7. Gallery
8. Final celebration

Fix only if the flow feels broken, abrupt, or confusing.

Do not reorder sections unless the current order is clearly wrong.

### 2. Runaway button

This is the main troll interaction.

Requirements:

* Button dodges the user at most 4 times.
* After 4 dodges, it becomes clickable.
* It never moves outside the visible screen.
* It works on desktop and mobile.
* It does not become impossible to tap.
* It has funny messages after each failed attempt.
* Keyboard users can still activate it.
* It should feel playful, not annoying.

If the current implementation is mostly working, polish it instead of rewriting it.

Suggested messages:

1. “Ủa? Bấm hụt hả?”
2. “Chậm quá nha.”
3. “Muốn xem bí mật thì phải có kỹ năng.”
4. “Thôi được rồi, không hành nữa.”

Final button text:

“Rồi bấm đi, cho xem thật nè.”

### 3. Transition from troll to emotion

This transition must feel intentional.

The dark hacker/fake system mood should smoothly become warm, emotional, and sincere.

Improve:

* Background transition
* Text pacing
* Glitch exit
* Warm pastel reveal
* Smooth scroll or section transition
* Emotional copy readability

Do not keep glitch effects inside the emotional section.

### 4. Video wishes section

This section should feel like the emotional center.

Improve:

* Video container responsiveness
* Rounded cinema-style frame
* Soft glow/shadow
* Placeholder fallback if video URL is missing
* Spacing around text and video
* Mobile layout

Do not overdecorate this section.

Let the video breathe.

### 5. Memory gallery

Improve only what is necessary.

Check:

* Images come from config/data if possible.
* Grid is responsive.
* Images lazy-load.
* Captions display nicely.
* Lightbox opens and closes correctly.
* Escape key closes modal.
* Backdrop click closes modal.
* Mobile behavior is smooth.
* Missing images do not break the layout.

Do not replace the whole gallery if it already works.

### 6. Final celebration

The ending should feel joyful and explosive but still readable.

Improve:

* Confetti timing
* Replay button
* Big birthday typography
* Gradient background
* Mobile spacing
* Text contrast
* Button clarity

Do not add too many particles that hurt performance or hide the message.

### 7. Mobile polish

Test mentally and through code for:

* 360px width
* 390px width
* Tablet
* Desktop

Fix:

* Text overflow
* Button overflow
* Gallery issues
* Video aspect ratio
* Timeline readability
* Horizontal scroll bugs
* Excessive spacing
* Tiny tap targets

Mobile smoothness is more important than complex visual effects.

### 8. Performance and accessibility

Improve only where needed.

Performance:

* Avoid unnecessary re-renders.
* Avoid heavy continuous animation.
* Use CSS transform/opacity for motion.
* Lazy-load images.
* Avoid expensive blur everywhere.
* Do not add heavy dependencies without strong reason.

Accessibility:

* Buttons must be real button elements.
* Images need alt text.
* Modal needs close button.
* Escape should close modal.
* Reduced motion should reduce heavy effects.
* Text contrast should be readable.
* Keyboard users should not get blocked by the runaway button.

## What not to do

Do not:

* Start a new Vite project.
* Replace the whole UI.
* Add unrelated features.
* Add 3D unless explicitly requested later.
* Add GSAP if Framer Motion is already enough.
* Add shadcn/ui if the project already has working custom components.
* Rewrite all CSS.
* Change the story concept.
* Remove the troll vibe.
* Remove the emotional middle.
* Remove the final celebration.
* Make large refactors without a clear bug or UX reason.

## Allowed changes

You may:

* Polish existing components.
* Fix broken or awkward interactions.
* Improve animation timing.
* Improve responsive layout.
* Improve config usage.
* Improve video fallback.
* Improve gallery/lightbox behavior.
* Improve final confetti behavior.
* Remove unused code.
* Fix build/lint/type errors.
* Add small helper functions if they reduce duplication.
* Add comments only where they explain non-obvious interaction logic.

## Final response format

After finishing, report concisely:

1. What you inspected
2. What issues you found
3. What you changed
4. What files were changed
5. What checks you ran
6. How to customize names, video URL, and images
7. Any remaining placeholders or TODOs

Do not claim something was tested if it was not actually run.
