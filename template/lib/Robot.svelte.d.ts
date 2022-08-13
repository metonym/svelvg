/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RobotProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Robot extends SvelteComponentTyped<
  RobotProps,
  {},
  { default: {} }
> {}
