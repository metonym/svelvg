/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalMedicalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalMedical extends SvelteComponentTyped<
  JournalMedicalProps,
  {},
  { default: {} }
> {}
