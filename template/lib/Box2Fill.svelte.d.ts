/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Box2FillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Box2Fill extends SvelteComponentTyped<
  Box2FillProps,
  {},
  { default: {} }
> {}
