/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JoystickProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Joystick extends SvelteComponentTyped<
  JoystickProps,
  {},
  { default: {} }
> {}
