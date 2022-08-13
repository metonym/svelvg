/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProjectorProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Projector extends SvelteComponentTyped<
  ProjectorProps,
  {},
  { default: {} }
> {}
