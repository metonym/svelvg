/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProjectorFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ProjectorFill extends SvelteComponentTyped<
  ProjectorFillProps,
  {},
  { default: {} }
> {}
