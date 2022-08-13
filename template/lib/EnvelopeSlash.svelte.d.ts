/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeSlash extends SvelteComponentTyped<
  EnvelopeSlashProps,
  {},
  { default: {} }
> {}
