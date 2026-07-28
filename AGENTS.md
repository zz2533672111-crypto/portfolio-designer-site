# AGENTS.md

## Project

This is a React + Vite personal portfolio site for a visual designer / AI designer / AI trainer / brand designer.

Core positioning:

> 训练 AI，也训练方法。让好结果稳定发生。

The site should feel like a moving Eastern folk-story book plus an AI training portfolio. It must remain professional, inspectable, and useful for hiring teams or brand clients.

## Do Not Delete

Do not remove existing content or sections unless the user explicitly asks.

Must preserve these sections:

- Hero
- Concept
- Immersive
- Projects
- Experience
- Approach
- Strengths
- Contact

Must preserve these project cases:

- Sea of Flying Fish / 飞鱼之海
- Echo / Silence Is Louder
- Osmanthus Workflow / 桂花空间视觉

Must preserve these visual elements:

- Static crow spiral visual symbol
- White / warm paper background
- Orange-yellow scattered point system
- Hand-drawn flowing lines
- Irregular paper / cloth / cut-paper surfaces
- AI training archive cards over the crow image

The crow spiral should stay static. Do not add rotation, floating, or heavy dynamic effects to it.

## Visual Direction

Keep the current core style:

- white / off-white rice-paper background
- subtle paper texture, grain, ink marks, and irregular empty space
- restrained Eastern folk-story mood
- absurd but gentle atmosphere
- handmade roughness, but still polished and readable
- professional AI training / visual methodology framing

Main palette:

- paper white
- ink black
- earth yellow
- orange yellow
- clay red
- old gold
- small moss / gray-green accents

Avoid:

- black tech style
- cyberpunk
- neon
- generic portfolio templates
- overdone guochao decoration
- decorative effects that block the work
- random floating images
- heavy 3D spectacle

## Composition Rules

Work images are evidence. They must stay complete and inspectable.

- Center the subject.
- Preserve full image boundaries when possible.
- Prefer `object-fit: contain` for posters, renders, and case images.
- Keep appropriate padding around the subject.
- Avoid cropping faces, titles, architecture edges, posters, and key visual elements.
- Hover motion should not crop or hide important content.
- If necessary, reduce subject scale before allowing clipping.

## Content Rules

The site should not only show final images. It should explain method.

Each project should clearly communicate:

- my role
- design goal
- visual method
- final outcome
- project type
- year
- training evidence or visual proof

Keep the language clear, professional, and specific. Avoid empty buzzwords.

## Motion Rules

Motion should feel like turning pages, wind moving paper, sparks drifting, or lines slowly extending.

- Keep animation slow and quiet.
- Do not let motion compete with text or work images.
- Support `prefers-reduced-motion`.
- Do not hide content behind animation.
- Pointer effects should be subtle and stable.

## Technical Notes

Use the existing React + Vite structure.

Common commands:

```bash
npm install
npm run dev
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

The production build uses:

```bash
vite build --base=./
```

GitHub Pages deployment is configured through `.github/workflows/deploy.yml`.

## Editing Guidelines

- Keep changes scoped.
- Follow existing component and CSS patterns.
- Do not rewrite the whole site unless explicitly requested.
- Do not replace real project images with placeholders.
- Do not remove accessibility support.
- Keep text readable and contrast sufficient.
- Use semantic HTML where practical.
- Verify with `npm run build` after meaningful changes.
我要的是在Microsoft Edge里优化
