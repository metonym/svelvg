/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlarmProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Alarm extends SvelteComponentTyped<
  AlarmProps,
  {},
  { default: {} }
> {}
