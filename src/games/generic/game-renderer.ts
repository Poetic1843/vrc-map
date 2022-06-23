import type { Renderable, Tickable } from "util/class-bases";

export interface GameRenderer extends Tickable, Renderable {
    tick(mouseX: number, mouseY: number, snappedMouseX: number, snappedMouseY: number, mouseButton: number, shiftKey: boolean, ctrlKey: boolean, deltaScroll: number): void;
    render(ctx: CanvasRenderingContext2D): void;
    render_static(ctx: CanvasRenderingContext2D): void;
}