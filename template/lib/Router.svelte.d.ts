/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RouterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Router extends SvelteComponentTyped<
  RouterProps,
  {},
  { default: {} }
> {}
