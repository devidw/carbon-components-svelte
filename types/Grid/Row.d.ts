/// <reference types="svelte" />

export interface RowProps {
  /**
   * Set to `true` to render a custom HTML element
   * Props are destructured as `props` in the default slot (e.g. <Row let:props><section {...props}>...</section></Row>)
   * @default false
   */
  as?: boolean;

  /**
   * Set to `true` to use the condensed variant
   * @default false
   */
  condensed?: boolean;

  /**
   * Set to `true` to use the narrow variant
   * @default false
   */
  narrow?: boolean;

  /**
   * Set to `true` to remove the gutter
   * @default false
   */
  noGutter?: boolean;

  /**
   * Set to `true` to remove the left gutter
   * @default false
   */
  noGutterLeft?: boolean;

  /**
   * Set to `true` to remove the right gutter
   * @default false
   */
  noGutterRight?: boolean;
}

export default class Row {
  $$prop_def: RowProps;
  $$slot_def: {
    default: { props?: { class: string; [key: string]: any } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
