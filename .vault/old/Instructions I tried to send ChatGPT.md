
I want you to write a component called `ChainView`. This component is a scrollable ribbon containing two element components:

1. `ChainViewPage`
2. `ChainViewSummary`

The idea is that each `ChainViewSummary` is a zoomed out version of a `ChainViewPage`, which has a summary of the page’s content. The `ChainView` has two modes:

1. Page mode, which displays and renders `ChainViewPage` components that fill the `ChainView`.
2. Summary mode, in which the `ChainViewPage` components disappear, showing `ChainViewSummary` components.

In practice, the `ChainView` contains exactly 3 unmoving `ChainViewPage` components, laid atop a horizontally scrolling list of `ChainViewSummary` components. Each summary component has a width so that 5 are visible.

When the user scrolls the `ChainView`, the topmost page components disappear by animating opacity from 1 to 0, showing the summaries underneath. The `ChainView` scroll snaps to summary component boundaries.

When the scrolling finishes, the `ChainView` enters page mode as follows.

1. It first retrieves the page contents of the 3 central summaries.
2. It loads them into the `ChainViewPage` components.
3. It animates `ChainViewPage` opacity from 0 to 1. 

The user should be able to scroll the `ChainView` using a dragging motion with the mouse, while holding LButton.

Scrolling the component during the transition will cancel it (no animation) and the component will go back to summary mode.

# Styling

## ChainView
Should be the width of the viewport.

Should have a 600px height.

Should have a thick black border around it.

Should not display the scroll bar.

## ChainViewPage
Should have a thin margin between each 2 pages.

Should have 80% height and be vertically centered.

Should be wide enough for 3 to display in the `ChainView`, including the margin. The width should not change based on the contents.

Off-white background.

Should have 3 paragraphs of dummy text.

Should scroll vertically, but scrollbar should be hidden.

## ChainViewSummary
Should have a thicker margin between each 2 summaries.

Should have 40% height and be vertically centered.

Should be wide enough for 5 to display in the `ChainView`, including the margin. The width should not change based on the contents.

Off-white background.

Should have a sentence of dummy text.

Should not scroll.

# ADDITIONAL INSTRUCTIONS:
* Provide code with no explanations but with short comments
* Use `tsx`
* Use scss for styling. Place styling in a single `scss` style.
* Attach classes to various elements and style them using class selectors.
* The scroll bar should not be visible.
* Pre-generate dummy data for summaries and pages using a suitable npm package.
