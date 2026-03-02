/**
 * `playlist-card` - A single card in the playlist (image + info)
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class PlaylistCard extends DDDSuper(LitElement) {

  static get tag() {
    return "playlist-card";
  }

  constructor() {
    super();
    this.title = "";
    this.artist = "";
    this.image = "";
    this.description = "";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      artist: { type: String },
      image: { type: String },
      description: { type: String },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
      }
      .card {
        border-radius: var(--ddd-radius-md);
        overflow: hidden;
        background: var(--ddd-theme-accent);
        padding: var(--ddd-spacing-4);
        margin: var(--ddd-spacing-2);
      }
      .card img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: var(--ddd-radius-sm);
      }
      .card h4 {
        margin: var(--ddd-spacing-2) 0 0;
        font-size: var(--ddd-font-size-m);
      }
      .card p {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-primary);
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        ${this.image ? html`<img src="${this.image}" alt="${this.title}" />` : ""}
        <h4>${this.title}</h4>
        <p><strong>${this.artist}</strong></p>
        <p>${this.description}</p>
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PlaylistCard.tag, PlaylistCard);