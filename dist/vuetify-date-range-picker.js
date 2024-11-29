(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.date-selector[data-v-155b21fb]{cursor:pointer}.date-selector .theme--dark.v-sheet[data-v-155b21fb],.date-selector .theme--light.v-sheet[data-v-155b21fb]{background-color:transparent}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-btn .v-btn__underlay{position:absolute}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled:hover{opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--slim{padding:0 8px}.v-btn--readonly{pointer-events:none}.v-btn--rounded{border-radius:24px}.v-btn--rounded.v-btn--icon{border-radius:4px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loader>.v-progress-circular{width:1.5em;height:1.5em}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn--slim .v-btn__prepend{margin-inline-start:0}.v-btn__append{grid-area:append;margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn--slim .v-btn__append{margin-inline-end:0}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-pagination .v-btn{border-radius:4px}.v-pagination .v-btn--rounded{border-radius:50%}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled)>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;user-select:none;vertical-align:middle;width:1em;min-width:1em}.v-icon--clickable{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.38}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;inset:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background,.v-progress-linear__buffer{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;width:100%;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;height:inherit;inset:0 auto 0 0;position:absolute;width:auto}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate{border-start-start-radius:0;border-end-start-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-spacer{flex-grow:1}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1{margin-inline-start:8.3333333333%}.offset-2{margin-inline-start:16.6666666667%}.offset-3{margin-inline-start:25%}.offset-4{margin-inline-start:33.3333333333%}.offset-5{margin-inline-start:41.6666666667%}.offset-6{margin-inline-start:50%}.offset-7{margin-inline-start:58.3333333333%}.offset-8{margin-inline-start:66.6666666667%}.offset-9{margin-inline-start:75%}.offset-10{margin-inline-start:83.3333333333%}.offset-11{margin-inline-start:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0{margin-inline-start:0}.offset-sm-1{margin-inline-start:8.3333333333%}.offset-sm-2{margin-inline-start:16.6666666667%}.offset-sm-3{margin-inline-start:25%}.offset-sm-4{margin-inline-start:33.3333333333%}.offset-sm-5{margin-inline-start:41.6666666667%}.offset-sm-6{margin-inline-start:50%}.offset-sm-7{margin-inline-start:58.3333333333%}.offset-sm-8{margin-inline-start:66.6666666667%}.offset-sm-9{margin-inline-start:75%}.offset-sm-10{margin-inline-start:83.3333333333%}.offset-sm-11{margin-inline-start:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-inline-start:0}.offset-md-1{margin-inline-start:8.3333333333%}.offset-md-2{margin-inline-start:16.6666666667%}.offset-md-3{margin-inline-start:25%}.offset-md-4{margin-inline-start:33.3333333333%}.offset-md-5{margin-inline-start:41.6666666667%}.offset-md-6{margin-inline-start:50%}.offset-md-7{margin-inline-start:58.3333333333%}.offset-md-8{margin-inline-start:66.6666666667%}.offset-md-9{margin-inline-start:75%}.offset-md-10{margin-inline-start:83.3333333333%}.offset-md-11{margin-inline-start:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0{margin-inline-start:0}.offset-lg-1{margin-inline-start:8.3333333333%}.offset-lg-2{margin-inline-start:16.6666666667%}.offset-lg-3{margin-inline-start:25%}.offset-lg-4{margin-inline-start:33.3333333333%}.offset-lg-5{margin-inline-start:41.6666666667%}.offset-lg-6{margin-inline-start:50%}.offset-lg-7{margin-inline-start:58.3333333333%}.offset-lg-8{margin-inline-start:66.6666666667%}.offset-lg-9{margin-inline-start:75%}.offset-lg-10{margin-inline-start:83.3333333333%}.offset-lg-11{margin-inline-start:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0{margin-inline-start:0}.offset-xl-1{margin-inline-start:8.3333333333%}.offset-xl-2{margin-inline-start:16.6666666667%}.offset-xl-3{margin-inline-start:25%}.offset-xl-4{margin-inline-start:33.3333333333%}.offset-xl-5{margin-inline-start:41.6666666667%}.offset-xl-6{margin-inline-start:50%}.offset-xl-7{margin-inline-start:58.3333333333%}.offset-xl-8{margin-inline-start:66.6666666667%}.offset-xl-9{margin-inline-start:75%}.offset-xl-10{margin-inline-start:83.3333333333%}.offset-xl-11{margin-inline-start:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0{margin-inline-start:0}.offset-xxl-1{margin-inline-start:8.3333333333%}.offset-xxl-2{margin-inline-start:16.6666666667%}.offset-xxl-3{margin-inline-start:25%}.offset-xxl-4{margin-inline-start:33.3333333333%}.offset-xxl-5{margin-inline-start:41.6666666667%}.offset-xxl-6{margin-inline-start:50%}.offset-xxl-7{margin-inline-start:58.3333333333%}.offset-xxl-8{margin-inline-start:66.6666666667%}.offset-xxl-9{margin-inline-start:75%}.offset-xxl-10{margin-inline-start:83.3333333333%}.offset-xxl-11{margin-inline-start:91.6666666667%}}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline:8px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content 1fr auto;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-list-item .v-list-item__underlay{position:absolute}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-badge .v-icon,.v-list-item__prepend>.v-icon,.v-list-item__append>.v-badge .v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-badge .v-icon,.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-badge .v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--active:not(.v-list-item--link) .v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover) .v-list-item .v-avatar,.v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering) .v-list-item .v-avatar{--v-avatar-height: 24px}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append .v-list-item__spacer{order:-1;transition:.15s width cubic-bezier(.4,0,.2,1)}.v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item__append>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__append>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__append>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:8px;margin-inline-start:-8px}.v-list-item-action--end{margin-inline-start:8px;margin-inline-end:-8px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0;text-overflow:ellipsis;overflow-wrap:break-word;word-break:initial;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--nav{padding-inline:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list--slim .v-list-group{--prepend-width: 28px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header:not(.v-treeview-item--activetable-group-activator).v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-list-group__header:not(.v-treeview-item--activetable-group-activator).v-list-item--active:hover .v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-avatar .v-avatar__underlay{position:absolute}.v-avatar--rounded{border-radius:4px}.v-avatar--start{margin-inline-end:8px}.v-avatar--end{margin-inline-start:8px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img--rounded{border-radius:4px}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:auto;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-divider__content{padding:0 16px;text-wrap:nowrap}.v-divider__wrapper--vertical .v-divider__content{padding:4px 0}.v-divider__wrapper{display:flex;align-items:center;justify-content:center}.v-divider__wrapper--vertical{flex-direction:column;height:100%}.v-divider__wrapper--vertical .v-divider{margin:0 auto}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;inset:0;pointer-events:none;position:fixed}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;inset:0;opacity:var(--v-overlay-opacity, .32);position:fixed}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-sheet{display:block;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-sheet--border{border-width:thin;box-shadow:none}.v-sheet--absolute{position:absolute}.v-sheet--fixed{position:fixed}.v-sheet--relative{position:relative}.v-sheet--sticky{position:sticky}.v-sheet--rounded{border-radius:4px}.v-date-picker-table--disabled{pointer-events:none}.left-date-picker .v-date-picker-controls{flex-direction:row-reverse!important;justify-content:flex-start!important}.left-date-picker .v-date-picker-controls__mode-btn,.right-date-picker .v-date-picker-controls__mode-btn{display:none!important}.date-picker-desktop[data-v-da735bb7]{max-width:1150px;background-color:rgb(var(--v-theme-background))!important}.date-picker-desktop[data-v-da735bb7] .pickers{max-height:23em}.date-picker-desktop[data-v-da735bb7] .pickers .v-date-picker-header,.date-picker-desktop[data-v-da735bb7] .pickers .v-picker-title,.date-picker-desktop[data-v-da735bb7] .pickers .v-text-field__details{display:none}.date-picker-desktop[data-v-da735bb7] .picker-main{position:relative;z-index:1}.date-picker-desktop[data-v-da735bb7] .picker-main .picker-label{opacity:0}.date-picker-desktop[data-v-da735bb7] .picker-main .v-picker{background-color:transparent}.date-picker-desktop[data-v-da735bb7] .picker-main.active{z-index:1000}.date-picker-desktop[data-v-da735bb7] .picker-main .v-picker__body{background-color:transparent}.date-picker-desktop[data-v-da735bb7] .picker-main .v-date-picker-table button:not(.picker-main-selected){background-color:transparent}.date-picker-desktop[data-v-da735bb7] .picker-main .v-date-picker-table button:focus{background-color:#1976d2;color:#fff}.date-picker-desktop[data-v-da735bb7] .picker-main:not(.active) .picker-main-selected{color:#fff}.date-picker-desktop[data-v-da735bb7] .picker-compare{transform:translateY(-100%);position:relative;z-index:2}.date-picker-desktop[data-v-da735bb7] .picker-compare.active{z-index:1015}.date-picker-desktop[data-v-da735bb7] .picker-compare .v-date-picker-header,.date-picker-desktop[data-v-da735bb7] .picker-compare .v-date-picker-table thead{opacity:0}.date-picker-desktop[data-v-da735bb7] .picker-compare .v-date-picker-table button:not(.picker-compare-selected){color:transparent}.date-picker-desktop[data-v-da735bb7] .picker-compare .v-date-picker-table button:focus{background-color:#f57c00;color:#fff}.date-picker-desktop[data-v-da735bb7] .picker-compare .v-picker,.date-picker-desktop[data-v-da735bb7] .picker-compare .v-picker .v-picker__body{background-color:transparent!important}.date-picker-desktop[data-v-da735bb7] .compare-label .v-messages{display:none}.date-picker-desktop[data-v-da735bb7] .picker-main-left .v-date-picker-controls>button:nth-of-type(2){display:none!important}.date-picker-desktop[data-v-da735bb7] .v-date-picker-controls .picker-main-right>button:nth-of-type(1){display:none}.v-card{display:block;overflow:hidden;overflow-wrap:break-word;position:relative;padding:0;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:4px}.v-card--border{border-width:thin;box-shadow:none}.v-card--absolute{position:absolute}.v-card--fixed{position:fixed}.v-card:hover>.v-card__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-card:focus-visible>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card:focus>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-card--active>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-card--active:hover>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-card--active:focus-visible>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card--active:focus>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-card--variant-plain,.v-card--variant-outlined,.v-card--variant-text,.v-card--variant-tonal{background:transparent;color:inherit}.v-card--variant-plain{opacity:.62}.v-card--variant-plain:focus,.v-card--variant-plain:hover{opacity:1}.v-card--variant-plain .v-card__overlay{display:none}.v-card--variant-elevated,.v-card--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-card--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-outlined{border:thin solid currentColor}.v-card--variant-text .v-card__overlay{background:currentColor}.v-card--variant-tonal .v-card__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-card .v-card__underlay{position:absolute}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>:not(.v-card__loader){opacity:.6}.v-card--flat{box-shadow:none}.v-card--hover{cursor:pointer}.v-card--hover:before,.v-card--hover:after{border-radius:inherit;content:"";display:block;inset:0;pointer-events:none;position:absolute;transition:inherit}.v-card--hover:before{opacity:1;z-index:-1;box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:after{z-index:1;opacity:0;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:hover:after{opacity:1}.v-card--hover:hover:before{opacity:0}.v-card--hover:hover{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--link{cursor:pointer}.v-card-actions{align-items:center;display:flex;flex:none;min-height:52px;padding:.5rem}.v-card-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;padding:.625rem 1rem}.v-card-item+.v-card-text{padding-top:0}.v-card-item__prepend,.v-card-item__append{align-items:center;display:flex}.v-card-item__prepend{grid-area:prepend;padding-inline-end:.5rem}.v-card-item__append{grid-area:append;padding-inline-start:.5rem}.v-card-item__content{align-self:center;grid-area:content;overflow:hidden}.v-card-title{display:block;flex:none;font-size:1.25rem;font-weight:500;hyphens:auto;letter-spacing:.0125em;min-width:0;overflow-wrap:normal;overflow:hidden;padding:.5rem 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap;word-break:normal;word-wrap:break-word}.v-card .v-card-title{line-height:1.6}.v-card--density-comfortable .v-card-title{line-height:1.75rem}.v-card--density-compact .v-card-title{line-height:1.55rem}.v-card-item .v-card-title{padding:0}.v-card-title+.v-card-text,.v-card-title+.v-card-actions{padding-top:0}.v-card-subtitle{display:block;flex:none;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.v-card .v-card-subtitle{line-height:1.425}.v-card--density-comfortable .v-card-subtitle{line-height:1.125rem}.v-card--density-compact .v-card-subtitle{line-height:1rem}.v-card-item .v-card-subtitle{padding:0 0 .25rem}.v-card-text{flex:1 1 auto;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-text-opacity, 1);padding:1rem;text-transform:none}.v-card .v-card-text{line-height:1.425}.v-card--density-comfortable .v-card-text{line-height:1.2rem}.v-card--density-compact .v-card-text{line-height:1.15rem}.v-card__image{display:flex;height:100%;flex:1 1 auto;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-card__content{border-radius:inherit;overflow:hidden;position:relative}.v-card__loader{inset:0 0 auto;position:absolute;width:100%;z-index:1}.v-card__overlay{background-color:currentColor;border-radius:inherit;position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-checkbox.v-input{flex:0 1 auto}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;color:inherit;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 16px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 12px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 8px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-input--hide-spin-buttons input::-webkit-outer-spin-button,.v-input--hide-spin-buttons input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.v-input--hide-spin-buttons input[type=number]{-moz-appearance:textfield}.v-input--plain-underlined .v-input__prepend,.v-input--plain-underlined .v-input__append{align-items:flex-start}.v-input--density-default.v-input--plain-underlined .v-input__prepend,.v-input--density-default.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 4px)}.v-input--density-comfortable.v-input--plain-underlined .v-input__prepend,.v-input--density-comfortable.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 2px)}.v-input--density-compact.v-input--plain-underlined .v-input__prepend,.v-input--density-compact.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 0px)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-date-picker{overflow:hidden;width:328px}.v-date-picker--show-week{width:368px}.v-date-picker-controls{display:flex;align-items:center;justify-content:space-between;font-size:.875rem;padding-top:4px;padding-bottom:4px;padding-inline-start:6px;padding-inline-end:12px}.v-date-picker-controls>.v-btn:first-child{text-transform:none;font-weight:400;line-height:initial;letter-spacing:initial}.v-date-picker-controls--variant-classic{padding-inline-start:12px}.v-date-picker-controls--variant-modern .v-date-picker__title:not(:hover){opacity:.7}.v-date-picker--month .v-date-picker-controls--variant-modern .v-date-picker__title{cursor:pointer}.v-date-picker--year .v-date-picker-controls--variant-modern .v-date-picker__title{opacity:1}.v-date-picker-controls .v-btn:last-child{margin-inline-start:4px}.v-date-picker--year .v-date-picker-controls .v-date-picker-controls__mode-btn{transform:rotate(180deg)}.v-date-picker-controls__date{margin-inline-end:4px}.v-date-picker-controls--variant-classic .v-date-picker-controls__date{margin:auto;text-align:center}.v-date-picker-controls__month{display:flex}.v-locale--is-rtl.v-date-picker-controls__month,.v-locale--is-rtl .v-date-picker-controls__month{flex-direction:row-reverse}.v-date-picker-controls--variant-classic .v-date-picker-controls__month{flex:1 0 auto}.v-date-picker__title{display:inline-block}.v-date-picker-header{align-items:flex-end;height:70px;display:grid;grid-template-areas:"prepend content append";grid-template-columns:min-content minmax(0,1fr) min-content;overflow:hidden;padding-inline:24px 12px;padding-bottom:12px}.v-date-picker-header__append{grid-area:append}.v-date-picker-header__prepend{grid-area:prepend;padding-inline-start:8px}.v-date-picker-header__content{align-items:center;display:inline-flex;font-size:32px;line-height:40px;grid-area:content;justify-content:space-between}.v-date-picker-header--clickable .v-date-picker-header__content{cursor:pointer}.v-date-picker-header--clickable .v-date-picker-header__content:not(:hover){opacity:.7}.date-picker-header-transition-enter-active,.date-picker-header-reverse-transition-enter-active,.date-picker-header-transition-leave-active,.date-picker-header-reverse-transition-leave-active{transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.date-picker-header-transition-enter-from{transform:translateY(100%)}.date-picker-header-transition-leave-to{opacity:0;transform:translateY(-100%)}.date-picker-header-reverse-transition-enter-from{transform:translateY(-100%)}.date-picker-header-reverse-transition-leave-to{opacity:0;transform:translateY(100%)}.v-date-picker-month{display:flex;justify-content:center;padding:0 12px 8px;--v-date-picker-month-day-diff: 4px}.v-date-picker-month__weeks{display:grid;grid-template-rows:min-content min-content min-content min-content min-content min-content min-content;column-gap:4px;font-size:.85rem}.v-date-picker-month__weeks+.v-date-picker-month__days{grid-row-gap:0}.v-date-picker-month__weekday{font-size:.85rem}.v-date-picker-month__days{display:grid;grid-template-columns:min-content min-content min-content min-content min-content min-content min-content;column-gap:4px;flex:1 1;justify-content:space-around}.v-date-picker-month__day{align-items:center;display:flex;justify-content:center;position:relative;height:40px;width:40px}.v-date-picker-month__day--selected .v-btn{background-color:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-date-picker-month__day .v-btn.v-date-picker-month__day-btn{--v-btn-height: 24px;--v-btn-size: .85rem}.v-date-picker-month__day--week{font-size:var(--v-btn-size)}.v-date-picker-month__day--adjacent{opacity:.5}.v-date-picker-month__day--hide-adjacent{opacity:0}.v-date-picker-months{height:288px}.v-date-picker-months__content{align-items:center;display:grid;flex:1 1;height:inherit;justify-content:space-around;grid-template-columns:repeat(2,1fr);grid-gap:0px 24px;padding-inline-start:36px;padding-inline-end:36px}.v-date-picker-months__content .v-btn{text-transform:none;padding-inline-start:8px;padding-inline-end:8px}.v-date-picker-years{height:288px;overflow-y:scroll}.v-date-picker-years__content{display:grid;flex:1 1;justify-content:space-around;grid-template-columns:repeat(3,1fr);gap:8px 24px;padding-inline:32px}.v-date-picker-years__content .v-btn{padding-inline:8px}.v-picker.v-sheet{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px;display:grid;grid-auto-rows:min-content;grid-template-areas:"title" "header" "body";overflow:hidden}.v-picker.v-sheet.v-picker--with-actions{grid-template-areas:"title" "header" "body" "actions"}.v-picker__body{grid-area:body;overflow:hidden;position:relative}.v-picker__header{grid-area:header}.v-picker__actions{grid-area:actions;padding:0 12px 12px;display:flex;align-items:center;justify-content:flex-end}.v-picker__actions .v-btn{min-width:48px}.v-picker__actions .v-btn:not(:last-child){margin-inline-end:8px}.v-picker--landscape{grid-template-areas:"title" "header body" "header body"}.v-picker--landscape.v-picker--with-actions{grid-template-areas:"title" "header body" "header actions"}.v-picker-title{text-transform:uppercase;font-size:.75rem;grid-area:title;padding-inline:24px 12px;padding-top:16px;padding-bottom:16px;font-weight:400;letter-spacing:.1666666667em}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline:16px}.v-input--plain-underlined.v-text-field .v-input__details{padding-inline:0}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{--v-theme-overlay-multiplier: 1;display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 8px;--v-field-padding-bottom: 4px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 4px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field .v-chip{--v-chip-height: 24px}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 16px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 12px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-top: 4px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-top: 2px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-top: 0px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:24px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{align-items:center;color:inherit;column-gap:2px;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));min-width:0;padding-inline:var(--v-field-padding-start) var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-input--density-default .v-field__input{row-gap:8px}.v-input--density-comfortable .v-field__input{row-gap:6px}.v-input--density-compact .v-field__input{row-gap:4px}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 8px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 4px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;overflow:hidden;margin-inline:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}@media (hover: none){.v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;display:block;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform;z-index:1}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:unset}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-color:currentColor;border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width);border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit}.v-field--rounded.v-field--variant-outlined .v-field__outline__start,[class^=rounded-].v-field--variant-outlined .v-field__outline__start,[class*=" rounded-"].v-field--variant-outlined .v-field__outline__start{flex-basis:calc(var(--v-input-control-height) / 2 + 2px)}.v-field--reverse.v-field--variant-outlined .v-field__outline__start{border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0;border-inline-end-width:var(--v-field-border-width);border-inline-start-width:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative;max-width:calc(100% - 12px)}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width);border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0}.v-field--reverse.v-field--variant-outlined .v-field__outline__end{border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit;border-inline-end-width:0;border-inline-start-width:var(--v-field-border-width)}.v-field__loader{top:calc(100% - 2px);left:0;position:absolute;right:0;width:100%;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;overflow:hidden}.v-field--variant-outlined .v-field__loader{top:calc(100% - 3px);width:calc(100% - 2px);left:1px}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__field,.v-field--reverse .v-field__input,.v-field--reverse .v-field__outline{flex-direction:row-reverse}.v-field--reverse .v-field__input,.v-field--reverse input{text-align:end}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.date-picker-tablet[data-v-e4d7f3ae]{max-width:785px;margin-top:15vh;background-color:rgb(var(--v-theme-background))!important}.date-picker-tablet[data-v-e4d7f3ae] .v-card{overflow:hidden!important}.date-picker-tablet[data-v-e4d7f3ae] .pickers{max-height:23.5em}.date-picker-tablet[data-v-e4d7f3ae] .pickers .v-date-picker-header,.date-picker-tablet[data-v-e4d7f3ae] .pickers .v-picker-title,.date-picker-tablet[data-v-e4d7f3ae] .pickers .v-text-field__details,.date-picker-tablet[data-v-e4d7f3ae] .picker-input .v-text-field__details{display:none}.date-picker-tablet[data-v-e4d7f3ae] .picker-main{position:relative;z-index:1}.date-picker-tablet[data-v-e4d7f3ae] .picker-main .picker-label{opacity:0}.date-picker-tablet[data-v-e4d7f3ae] .picker-main.active{z-index:1000}.date-picker-tablet[data-v-e4d7f3ae] .picker-main .v-picker__body{background-color:transparent}.date-picker-tablet[data-v-e4d7f3ae] .picker-main .v-date-picker-table button:not(.picker-main-selected){background-color:transparent}.date-picker-tablet[data-v-e4d7f3ae] .picker-main .v-date-picker-table button:focus{background-color:#1976d2;color:#fff}.date-picker-tablet[data-v-e4d7f3ae] .picker-main:not(.active) .picker-main-selected{color:#fff}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare{transform:translateY(-100%);position:relative;z-index:2}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare.active{z-index:1015}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare .v-date-picker-header,.date-picker-tablet[data-v-e4d7f3ae] .picker-compare .v-date-picker-table thead{opacity:0}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare .v-date-picker-table button:not(.picker-compare-selected){color:transparent}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare .v-date-picker-table button:focus{background-color:#f57c00;color:#fff}.date-picker-tablet[data-v-e4d7f3ae] .picker-compare .v-picker .v-picker__body{background-color:transparent!important}.date-picker-tablet[data-v-e4d7f3ae] .compare-label .v-messages,.date-picker-mobile[data-v-e6e7c6a4] .picker-input .v-text-field__details,.date-picker-mobile[data-v-e6e7c6a4] .compare-label .v-messages{display:none}.v-dialog{align-items:center;justify-content:center;margin:auto}.v-dialog>.v-overlay__content{max-height:calc(100% - 48px);width:calc(100% - 48px);max-width:calc(100% - 48px);margin:24px}.v-dialog>.v-overlay__content,.v-dialog>.v-overlay__content>form{display:flex;flex-direction:column;min-height:0}.v-dialog>.v-overlay__content>.v-card,.v-dialog>.v-overlay__content>.v-sheet,.v-dialog>.v-overlay__content>form>.v-card,.v-dialog>.v-overlay__content>form>.v-sheet{--v-scrollbar-offset: 0px;border-radius:4px;overflow-y:auto;box-shadow:0 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 9px 46px 8px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-dialog>.v-overlay__content>.v-card,.v-dialog>.v-overlay__content>form>.v-card{display:flex;flex-direction:column}.v-dialog>.v-overlay__content>.v-card>.v-card-item,.v-dialog>.v-overlay__content>form>.v-card>.v-card-item{padding:16px 24px}.v-dialog>.v-overlay__content>.v-card>.v-card-item+.v-card-text,.v-dialog>.v-overlay__content>form>.v-card>.v-card-item+.v-card-text{padding-top:0}.v-dialog>.v-overlay__content>.v-card>.v-card-text,.v-dialog>.v-overlay__content>form>.v-card>.v-card-text{font-size:inherit;letter-spacing:.03125em;line-height:inherit;padding:16px 24px 24px}.v-dialog>.v-overlay__content>.v-card>.v-card-actions,.v-dialog>.v-overlay__content>form>.v-card>.v-card-actions{justify-content:flex-end}.v-dialog--fullscreen{--v-scrollbar-offset: 0px}.v-dialog--fullscreen>.v-overlay__content{border-radius:0;margin:0;padding:0;width:100%;height:100%;max-width:100%;max-height:100%;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-overlay__content>.v-card,.v-dialog--fullscreen>.v-overlay__content>.v-sheet,.v-dialog--fullscreen>.v-overlay__content>form>.v-card,.v-dialog--fullscreen>.v-overlay__content>form>.v-sheet{min-height:100%;min-width:100%;border-radius:0}.v-dialog--scrollable>.v-overlay__content,.v-dialog--scrollable>.v-overlay__content>form{display:flex}.v-dialog--scrollable>.v-overlay__content>.v-card,.v-dialog--scrollable>.v-overlay__content>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-overlay__content>.v-card>.v-card-text,.v-dialog--scrollable>.v-overlay__content>form>.v-card>.v-card-text{backface-visibility:hidden;overflow-y:auto}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import { createPinia as yu, defineStore as Ni } from "pinia";
import { shallowRef as ie, Fragment as Ie, reactive as Bn, computed as f, watchEffect as Rt, toRefs as js, capitalize as $n, warn as Ta, getCurrentInstance as _u, ref as H, unref as I, provide as qe, inject as Te, defineComponent as pu, camelize as zs, h as on, isRef as rn, createVNode as o, toRef as W, watch as J, onScopeDispose as Ze, effectScope as Nr, toRaw as $e, onBeforeUnmount as xt, onMounted as un, onUpdated as Su, mergeProps as K, Text as bu, readonly as Fr, Transition as jt, resolveDynamicComponent as ku, nextTick as We, withDirectives as nt, TransitionGroup as Br, vShow as Wn, onBeforeMount as Gs, resolveDirective as cn, Teleport as wu, openBlock as Z, createBlock as he, withCtx as O, createCommentVNode as De, createElementBlock as ze, normalizeClass as oa, toDisplayString as bn, renderList as Cu, createTextVNode as be, cloneVNode as Pu, withModifiers as xu } from "vue";
import { useDisplay as Tu } from "vuetify";
function Fi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fi(Object(n), !0).forEach(function(a) {
      Ks(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fi(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Dn(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(t) {
    return typeof t;
  } : Dn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
function Ks(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var qs = "_", Mu = "function", Du = [];
function Ou() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Du, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qs;
  if (!Zs(e))
    throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
  if (e.indexOf(t) !== -1)
    throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

` + "The placeholder character that was received is: ".concat(JSON.stringify(t), `

`) + "The mask that was received is: ".concat(JSON.stringify(e)));
  return e.map(function(n) {
    return n instanceof RegExp ? t : n;
  }).join("");
}
function Zs(e) {
  return Array.isArray && Array.isArray(e) || e instanceof Array;
}
var Eu = "[]";
function Au(e) {
  for (var t = [], n; n = e.indexOf(Eu), n !== -1; )
    t.push(n), e.splice(n, 1);
  return {
    maskWithoutCaretTraps: e,
    indexes: t
  };
}
var Iu = [], Ft = "";
function Xs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ft, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Iu, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!Zs(t))
    if (Dn(t) === Mu)
      t = t(e, n), t = Au(t).maskWithoutCaretTraps;
    else
      throw new Error("Text-mask:conformToMask; The mask property must be an array.");
  var a = n.guide, r = a === void 0 ? !0 : a, i = n.previousConformedValue, s = i === void 0 ? Ft : i, l = n.placeholderChar, u = l === void 0 ? qs : l, c = n.placeholder, d = c === void 0 ? Ou(t, u) : c, g = n.currentCaretPosition, h = n.keepCharPositions, v = r === !1 && s !== void 0, y = e.length, m = s.length, p = d.length, _ = t.length, P = y - m, M = P > 0, w = g + (M ? -P : 0), x = w + Math.abs(P);
  if (h === !0 && !M) {
    for (var E = Ft, k = w; k < x; k++)
      d[k] === u && (E += u);
    e = e.slice(0, w) + E + e.slice(w, y);
  }
  for (var F = e.split(Ft).map(function(Ot, oe) {
    return {
      char: Ot,
      isNew: oe >= w && oe < x
    };
  }), D = y - 1; D >= 0; D--) {
    var V = F[D].char;
    if (V !== u) {
      var N = D >= w && m === _;
      V === d[N ? D - P : D] && F.splice(D, 1);
    }
  }
  var b = Ft, C = !1;
  e: for (var Y = 0; Y < p; Y++) {
    var U = d[Y];
    if (U === u) {
      if (F.length > 0)
        for (; F.length > 0; ) {
          var j = F.shift(), ce = j.char, te = j.isNew;
          if (ce === u && v !== !0) {
            b += u;
            continue e;
          } else if (t[Y].test(ce)) {
            if (h !== !0 || te === !1 || s === Ft || r === !1 || !M)
              b += ce;
            else {
              for (var Se = F.length, ne = null, we = 0; we < Se; we++) {
                var Le = F[we];
                if (Le.char !== u && Le.isNew === !1)
                  break;
                if (Le.char === u) {
                  ne = we;
                  break;
                }
              }
              ne !== null ? (b += ce, F.splice(ne, 1)) : Y--;
            }
            continue e;
          } else
            C = !0;
        }
      v === !1 && (b += d.substr(Y, p));
      break;
    } else
      b += U;
  }
  if (v && M === !1) {
    for (var Ne = null, Qe = 0; Qe < b.length; Qe++)
      d[Qe] === u && (Ne = Qe);
    Ne !== null ? b = b.substr(0, Ne + 1) : b = Ft;
  }
  return {
    conformedValue: b,
    meta: {
      someCharsRejected: C
    }
  };
}
var mr = {
  __nextCharOptional__: !0
}, Ma = {
  "#": /\d/,
  A: /[a-z]/i,
  N: /[a-z0-9]/i,
  "?": mr,
  X: /./
}, Vu = function(t) {
  var n = t.lastIndexOf("/");
  return new RegExp(t.slice(1, n), t.slice(n + 1));
}, Ru = function(t) {
  return Vu(t.toString().replace(/.(\/)[gmiyus]{0,6}$/, function(n) {
    return n.replace("/", "?/");
  }));
}, Yu = function(t) {
  return "[\\^$.|?*+()".indexOf(t) > -1 ? "\\".concat(t) : t;
}, Lu = function(t) {
  return new RegExp("/[".concat(Yu(t), "]/"));
}, Nu = function(t) {
  return t instanceof RegExp;
}, Fu = function(t) {
  return Nu(t) ? t : Lu(t);
};
function Js(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma;
  return e.map(function(n, a, r) {
    var i = t[n] || n, s = r[a - 1], l = t[s] || s;
    return i === mr ? null : l === mr ? Ru(Fu(i)) : i;
  }).filter(Boolean);
}
function Bu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma;
  return Js(e.split(""), t);
}
function $u(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma, n = e.map(function(a) {
    return a instanceof RegExp ? a : typeof a == "string" ? a.split("") : null;
  }).filter(Boolean).reduce(function(a, r) {
    return a.concat(r);
  }, []);
  return Js(n, t);
}
var Wu = function(t, n) {
  var a = document.createEvent("HTMLEvents");
  a.initEvent(n, !0, !0), t.dispatchEvent(a);
}, er = function(t) {
  return t instanceof HTMLInputElement ? t : t.querySelector("input") || t;
}, Qs = function(t) {
  return typeof t == "function";
}, $r = function(t) {
  return typeof t == "string";
}, Uu = function(t) {
  return t instanceof RegExp;
};
function el(e, t) {
  return Array.isArray(e) ? $u(e, t) : Qs(e) ? e : $r(e) && e.length > 0 ? Bu(e, t) : e;
}
function Hu() {
  var e = /* @__PURE__ */ new Map(), t = {
    previousValue: "",
    mask: []
  };
  function n(i) {
    return e.get(i) || Mn({}, t);
  }
  function a(i, s) {
    e.set(i, Mn(Mn({}, n(i)), s));
  }
  function r(i) {
    e.delete(i);
  }
  return {
    partiallyUpdate: a,
    remove: r,
    get: n
  };
}
function tl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma;
  return e === null || Array.isArray(e) || Dn(e) !== "object" ? t : Object.keys(e).reduce(function(n, a) {
    var r = e[a];
    return r !== null && !(r instanceof RegExp) ? n : Mn(Mn({}, n), {}, Ks({}, a, r));
  }, t);
}
var ua = Hu();
function ju(e) {
  Wu(e, "input");
}
function Bi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.value, a = ua.get(e), r = a.previousValue, i = a.mask, s = n !== r, l = n.length > r.length, u = n && s && l;
  if ((t || u) && i) {
    var c = Xs(n, i, {
      guide: !1
    }), d = c.conformedValue;
    e.value = d, ju(e);
  }
  ua.partiallyUpdate(e, {
    previousValue: n
  });
}
function $i(e, t, n) {
  var a = el(t, n);
  ua.partiallyUpdate(e, {
    mask: a
  });
}
function Wi(e) {
  var t = Array.isArray(e) ? e : [e], n = t.filter(function(a) {
    return $r(a) || Uu(a);
  });
  return n.toString();
}
function zu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = tl(e && e.placeholders);
  return {
    bind: function(a, r) {
      var i = r.value;
      a = er(a), $i(a, i, t), Bi(a);
    },
    componentUpdated: function(a, r) {
      var i = r.value, s = r.oldValue;
      a = er(a);
      var l = Qs(i) || Wi(s) !== Wi(i);
      l && $i(a, i, t), Bi(a, l);
    },
    unbind: function(a) {
      a = er(a), ua.remove(a);
    }
  };
}
var Gu = zu();
function Ku() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = tl(e && e.placeholders);
  return function(n, a) {
    if (!$r(n) && !Number.isFinite(n)) return n;
    var r = el(a, t), i = Xs("".concat(n), r, {
      guide: !1
    }), s = i.conformedValue;
    return s;
  };
}
Ku();
const Un = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, Ue = typeof window < "u", Wr = Ue && "IntersectionObserver" in window;
function nl(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let r = 0; r < a; r++) {
    if (e == null)
      return n;
    e = e[t[r]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Hn(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Hn(e[a], t[a]));
}
function qu(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), nl(e, t.split("."), n));
}
function kn(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string") return qu(e, t, n);
  if (Array.isArray(t)) return nl(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function q(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function hr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Zu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Ui = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function tr(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function rl(e, t) {
  const n = {}, a = new Set(Object.keys(e));
  for (const r of t)
    a.has(r) && (n[r] = e[r]);
  return n;
}
function Hi(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((s) => s instanceof RegExp ? s.test(i) : s === i) && !n?.some((s) => s === i) ? a[i] = e[i] : r[i] = e[i];
  return [a, r];
}
function wt(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
function Xu(e, t) {
  const n = {};
  return t.forEach((a) => n[a] = e[a]), n;
}
const il = /^on[^a-z]/, Ur = (e) => il.test(e), Ju = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Hr(e) {
  const [t, n] = Hi(e, [il]), a = wt(t, Ju), [r, i] = Hi(n, ["class", "style", "id", /^data-/]);
  return Object.assign(r, t), Object.assign(i, a), [r, i];
}
function Re(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ji(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Qu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Zt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const r in e)
    a[r] = e[r];
  for (const r in t) {
    const i = e[r], s = t[r];
    if (hr(i) && hr(s)) {
      a[r] = Zt(i, s, n);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(s) && n) {
      a[r] = n(i, s);
      continue;
    }
    a[r] = s;
  }
  return a;
}
function sl(e) {
  return e.map((t) => t.type === Ie ? sl(t.children) : t).flat();
}
function Wt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Wt.cache.has(e)) return Wt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Wt.cache.set(e, t), t;
}
Wt.cache = /* @__PURE__ */ new Map();
function xn(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => xn(e, n)).flat(1);
  if (t.suspense)
    return xn(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => xn(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return xn(e, t.component.subTree).flat(1);
  }
  return [];
}
function jr(e) {
  const t = Bn({}), n = f(e);
  return Rt(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), js(t);
}
function da(e, t) {
  return e.includes(t);
}
function ll(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Be = () => [Function, Array];
function zi(e, t) {
  return t = "on" + $n(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ec(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const r of e)
      r(...n);
  else typeof e == "function" && e(...n);
}
function fa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function ol(e, t, n) {
  let a, r = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    r += i, a = e[r];
  while ((!a || a.offsetParent == null || !(n?.(a) ?? !0)) && r < e.length && r >= 0);
  return a;
}
function va(e, t) {
  const n = fa(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && n[0]?.focus();
  else if (t === "first")
    n[0]?.focus();
  else if (t === "last")
    n.at(-1)?.focus();
  else if (typeof t == "number")
    n[t]?.focus();
  else {
    const a = ol(n, t);
    a ? a.focus() : va(e, t === "next" ? "first" : "last");
  }
}
function ul(e, t) {
  if (!(Ue && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function tc(e, t) {
  if (!Ue || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function nc(e, t) {
  const n = e.clientX, a = e.clientY, r = t.getBoundingClientRect(), i = r.left, s = r.top, l = r.right, u = r.bottom;
  return n >= i && n <= l && a >= s && a <= u;
}
function ma() {
  const e = ie(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Zu(e.value)
  }), t;
}
const cl = ["top", "bottom"], ac = ["start", "end", "left", "right"];
function gr(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = da(cl, n) ? "start" : da(ac, n) ? "top" : "center"), {
    side: Gi(n, t),
    align: Gi(a, t)
  };
}
function Gi(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function nr(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function ar(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Ki(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function qi(e) {
  return da(cl, e.side) ? "y" : "x";
}
class Ut {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: r,
      height: i
    } = t;
    this.x = n, this.y = a, this.width = r, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Zi(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function dl(e) {
  return Array.isArray(e) ? new Ut({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function zr(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let r, i, s, l, u;
    if (a.startsWith("matrix3d("))
      r = a.slice(9, -1).split(/, /), i = +r[0], s = +r[5], l = +r[12], u = +r[13];
    else if (a.startsWith("matrix("))
      r = a.slice(7, -1).split(/, /), i = +r[0], s = +r[3], l = +r[4], u = +r[5];
    else
      return new Ut(t);
    const c = n.transformOrigin, d = t.x - l - (1 - i) * parseFloat(c), g = t.y - u - (1 - s) * parseFloat(c.slice(c.indexOf(" ") + 1)), h = i ? t.width / i : e.offsetWidth + 1, v = s ? t.height / s : e.offsetHeight + 1;
    return new Ut({
      x: d,
      y: g,
      width: h,
      height: v
    });
  } else
    return new Ut(t);
}
function Xt(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((r) => {
    a.onfinish = () => {
      r(a);
    };
  })), a;
}
const aa = /* @__PURE__ */ new WeakMap();
function rc(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ur(n)) {
      const a = ll(n), r = aa.get(e);
      if (t[n] == null)
        r?.forEach((i) => {
          const [s, l] = i;
          s === a && (e.removeEventListener(a, l), r.delete(i));
        });
      else if (!r || ![...r].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = r || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), aa.has(e) || aa.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function ic(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ur(n)) {
      const a = ll(n), r = aa.get(e);
      r?.forEach((i) => {
        const [s, l] = i;
        s === a && (e.removeEventListener(a, l), r.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const Gt = 2.4, Xi = 0.2126729, Ji = 0.7151522, Qi = 0.072175, sc = 0.55, lc = 0.58, oc = 0.57, uc = 0.62, Jn = 0.03, es = 1.45, cc = 5e-4, dc = 1.25, fc = 1.25, ts = 0.078, ns = 12.82051282051282, Qn = 0.06, as = 1e-3;
function rs(e, t) {
  const n = (e.r / 255) ** Gt, a = (e.g / 255) ** Gt, r = (e.b / 255) ** Gt, i = (t.r / 255) ** Gt, s = (t.g / 255) ** Gt, l = (t.b / 255) ** Gt;
  let u = n * Xi + a * Ji + r * Qi, c = i * Xi + s * Ji + l * Qi;
  if (u <= Jn && (u += (Jn - u) ** es), c <= Jn && (c += (Jn - c) ** es), Math.abs(c - u) < cc) return 0;
  let d;
  if (c > u) {
    const g = (c ** sc - u ** lc) * dc;
    d = g < as ? 0 : g < ts ? g - g * ns * Qn : g - Qn;
  } else {
    const g = (c ** uc - u ** oc) * fc;
    d = g > -as ? 0 : g > -ts ? g - g * ns * Qn : g + Qn;
  }
  return d * 100;
}
function en(e) {
  Ta(`Vuetify: ${e}`);
}
function vc(e) {
  Ta(`Vuetify error: ${e}`);
}
function mc(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, Ta(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
function yr(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function hc(e) {
  return yr(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const is = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, gc = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => ss({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => ss({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => En({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => En({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Tn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && en(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && is.test(e)) {
    const {
      groups: t
    } = e.match(is), {
      fn: n,
      values: a
    } = t, r = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return gc[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || en(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && en(`'${e}' is not a valid hex(a) color`), yc(t);
  } else if (typeof e == "object") {
    if (tr(e, ["r", "g", "b"]))
      return e;
    if (tr(e, ["h", "s", "l"]))
      return En(fl(e));
    if (tr(e, ["h", "s", "v"]))
      return En(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function En(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: r
  } = e, i = (l) => {
    const u = (l + t / 60) % 6;
    return a - a * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, s = [i(5), i(3), i(1)].map((l) => Math.round(l * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: r
  };
}
function ss(e) {
  return En(fl(e));
}
function fl(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: r
  } = e, i = a + n * Math.min(a, 1 - a), s = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s,
    v: i,
    a: r
  };
}
function yc(e) {
  e = _c(e);
  let [t, n, a, r] = Qu(e, 2).map((i) => parseInt(i, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: a,
    a: r
  };
}
function _c(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ji(ji(e, 6), 8, "F")), e;
}
function pc(e) {
  const t = Math.abs(rs(Tn(0), Tn(e)));
  return Math.abs(rs(Tn(16777215), Tn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function A(e, t) {
  return (n) => Object.keys(e).reduce((a, r) => {
    const s = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
      type: e[r]
    };
    return n && r in n ? a[r] = {
      ...s,
      default: n[r]
    } : a[r] = s, t && !a[r].source && (a[r].source = t), a;
  }, {});
}
const ee = A({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Me(e, t) {
  const n = _u();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function ct() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Me(e).type;
  return Wt(t?.aliasName || t?.name);
}
let vl = 0, ra = /* @__PURE__ */ new WeakMap();
function dt() {
  const e = Me("getUid");
  if (ra.has(e)) return ra.get(e);
  {
    const t = vl++;
    return ra.set(e, t), t;
  }
}
dt.reset = () => {
  vl = 0, ra = /* @__PURE__ */ new WeakMap();
};
function Sc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Me("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const ha = Symbol.for("vuetify:defaults");
function Gr() {
  const e = Te(ha);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function jn(e, t) {
  const n = Gr(), a = H(e), r = f(() => {
    if (I(t?.disabled)) return n.value;
    const s = I(t?.scoped), l = I(t?.reset), u = I(t?.root);
    if (a.value == null && !(s || l || u)) return n.value;
    let c = Zt(a.value, {
      prev: n.value
    });
    if (s) return c;
    if (l || u) {
      const d = Number(l || 1 / 0);
      for (let g = 0; g <= d && !(!c || !("prev" in c)); g++)
        c = c.prev;
      return c && typeof u == "string" && u in c && (c = Zt(Zt(c, {
        prev: c
      }), c[u])), c;
    }
    return c.prev ? Zt(c.prev, c) : c;
  });
  return qe(ha, r), r;
}
function bc(e, t) {
  return typeof e.props?.[t] < "u" || typeof e.props?.[Wt(t)] < "u";
}
function kc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr();
  const a = Me("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => n.value?.[e._as ?? t]), i = new Proxy(e, {
    get(u, c) {
      const d = Reflect.get(u, c);
      return c === "class" || c === "style" ? [r.value?.[c], d].filter((g) => g != null) : typeof c == "string" && !bc(a.vnode, c) ? r.value?.[c] !== void 0 ? r.value?.[c] : n.value?.global?.[c] !== void 0 ? n.value?.global?.[c] : d : d;
    }
  }), s = ie();
  Rt(() => {
    if (r.value) {
      const u = Object.entries(r.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      s.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      s.value = void 0;
  });
  function l() {
    const u = Sc(ha, a);
    qe(ha, f(() => s.value ? Zt(u?.value ?? {}, s.value) : u?.value));
  }
  return {
    props: i,
    provideSubDefaults: l
  };
}
function zn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return en("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = A(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return rl(a, t);
    }, e.props._as = String, e.setup = function(a, r) {
      const i = Gr();
      if (!i.value) return e._setup(a, r);
      const {
        props: s,
        provideSubDefaults: l
      } = kc(a, a._as ?? e.name, i), u = e._setup(s, r);
      return l(), u;
    };
  }
  return e;
}
function $() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? zn : pu)(t);
}
function Da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return $()({
    name: n ?? $n(zs(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...ee()
    },
    setup(a, r) {
      let {
        slots: i
      } = r;
      return () => on(a.tag, {
        class: [e, a.class],
        style: a.style
      }, i.default?.());
    }
  });
}
function ml(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const ga = "cubic-bezier(0.4, 0, 0.2, 1)", wc = "cubic-bezier(0.0, 0, 0.2, 1)", Cc = "cubic-bezier(0.4, 0, 1, 1)";
function Pc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? xc(e) : Kr(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ya(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Kr(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Kr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function xc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Tc(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function z(e) {
  const t = Me("useRender");
  t.render = e;
}
const dn = A({
  border: [Boolean, Number, String]
}, "border");
function fn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return {
    borderClasses: f(() => {
      const a = rn(e) ? e.value : e.border, r = [];
      if (a === !0 || a === "")
        r.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          r.push(`border-${i}`);
      return r;
    })
  };
}
const Mc = [null, "default", "comfortable", "compact"], Tt = A({
  density: {
    type: String,
    default: "default",
    validator: (e) => Mc.includes(e)
  }
}, "density");
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return {
    densityClasses: f(() => `${t}--density-${e.density}`)
  };
}
const vn = A({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function mn(e) {
  return {
    elevationClasses: f(() => {
      const n = rn(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const ft = A({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return {
    roundedClasses: f(() => {
      const a = rn(e) ? e.value : e.rounded, r = rn(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const s of String(a).split(" "))
          i.push(`rounded-${s}`);
      else (r || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Ce = A({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), ls = Symbol.for("vuetify:theme"), Ee = A({
  theme: String
}, "theme");
function Ye(e) {
  Me("provideTheme");
  const t = Te(ls, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), a = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: r
  };
  return qe(ls, i), i;
}
function qr(e) {
  return jr(() => {
    const t = [], n = {};
    if (e.value.background)
      if (yr(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && hc(e.value.background)) {
          const a = Tn(e.value.background);
          if (a.a == null || a.a === 1) {
            const r = pc(a);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (yr(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function Ct(e, t) {
  const n = f(() => ({
    text: rn(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = qr(n);
  return {
    textColorClasses: a,
    textColorStyles: r
  };
}
function tt(e, t) {
  const n = f(() => ({
    background: rn(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = qr(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: r
  };
}
const Dc = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Oa(e, t) {
  return o(Ie, null, [e && o("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), o("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const hn = A({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Dc.includes(e)
  }
}, "variant");
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  const n = f(() => {
    const {
      variant: i
    } = I(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: r
  } = qr(f(() => {
    const {
      variant: i,
      color: s
    } = I(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: s
    };
  }));
  return {
    colorClasses: a,
    colorStyles: r,
    variantClasses: n
  };
}
const hl = A({
  baseColor: String,
  divided: Boolean,
  ...dn(),
  ...ee(),
  ...Tt(),
  ...vn(),
  ...ft(),
  ...Ce(),
  ...Ee(),
  ...hn()
}, "VBtnGroup"), os = $()({
  name: "VBtnGroup",
  props: hl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ye(e), {
      densityClasses: r
    } = Yt(e), {
      borderClasses: i
    } = fn(e), {
      elevationClasses: s
    } = mn(e), {
      roundedClasses: l
    } = vt(e);
    jn({
      VBtn: {
        height: "auto",
        baseColor: W(e, "baseColor"),
        color: W(e, "color"),
        density: W(e, "density"),
        flat: !0,
        variant: W(e, "variant")
      }
    }), z(() => o(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, r.value, s.value, l.value, e.class],
      style: e.style
    }, n));
  }
});
function sn(e, t) {
  let n;
  function a() {
    n = Nr(), n.run(() => t.length ? t(() => {
      n?.stop(), a();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? a() : r || (n?.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ze(() => {
    n?.stop();
  });
}
function _e(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const i = Me("useProxiedModel"), s = H(e[t] !== void 0 ? e[t] : n), l = Wt(t), c = l !== t ? f(() => (e[t], !!((i.vnode.props?.hasOwnProperty(t) || i.vnode.props?.hasOwnProperty(l)) && (i.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || i.vnode.props?.hasOwnProperty(`onUpdate:${l}`))))) : f(() => (e[t], !!(i.vnode.props?.hasOwnProperty(t) && i.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  sn(() => !c.value, () => {
    J(() => e[t], (g) => {
      s.value = g;
    });
  });
  const d = f({
    get() {
      const g = e[t];
      return a(c.value ? g : s.value);
    },
    set(g) {
      const h = r(g), v = $e(c.value ? e[t] : s.value);
      v === h || a(v) === g || (s.value = h, i?.emit(`update:${t}`, h));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), d;
}
const Oc = A({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Ec = A({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Ac(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Me("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const r = dt();
  qe(Symbol.for(`${t.description}:id`), r);
  const i = Te(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const s = W(e, "value"), l = f(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: r,
    value: s,
    disabled: l
  }, a), xt(() => {
    i.unregister(r);
  });
  const u = f(() => i.isSelected(r)), c = f(() => i.items.value[0].id === r), d = f(() => i.items.value[i.items.value.length - 1].id === r), g = f(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return J(u, (h) => {
    a.emit("group:selected", {
      value: h
    });
  }, {
    flush: "sync"
  }), {
    id: r,
    isSelected: u,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(r, !u.value),
    select: (h) => i.select(r, h),
    selectedClass: g,
    value: s,
    disabled: l,
    group: i
  };
}
function Ic(e, t) {
  let n = !1;
  const a = Bn([]), r = _e(e, "modelValue", [], (h) => h == null ? [] : gl(a, Re(h)), (h) => {
    const v = Rc(a, h);
    return e.multiple ? v : v[0];
  }), i = Me("useGroup");
  function s(h, v) {
    const y = h, m = Symbol.for(`${t.description}:id`), _ = xn(m, i?.vnode).indexOf(v);
    I(y.value) == null && (y.value = _, y.useIndexAsValue = !0), _ > -1 ? a.splice(_, 0, y) : a.push(y);
  }
  function l(h) {
    if (n) return;
    u();
    const v = a.findIndex((y) => y.id === h);
    a.splice(v, 1);
  }
  function u() {
    const h = a.find((v) => !v.disabled);
    h && e.mandatory === "force" && !r.value.length && (r.value = [h.id]);
  }
  un(() => {
    u();
  }), xt(() => {
    n = !0;
  }), Su(() => {
    for (let h = 0; h < a.length; h++)
      a[h].useIndexAsValue && (a[h].value = h);
  });
  function c(h, v) {
    const y = a.find((m) => m.id === h);
    if (!(v && y?.disabled))
      if (e.multiple) {
        const m = r.value.slice(), p = m.findIndex((P) => P === h), _ = ~p;
        if (v = v ?? !_, _ && e.mandatory && m.length <= 1 || !_ && e.max != null && m.length + 1 > e.max) return;
        p < 0 && v ? m.push(h) : p >= 0 && !v && m.splice(p, 1), r.value = m;
      } else {
        const m = r.value.includes(h);
        if (e.mandatory && m) return;
        r.value = v ?? !m ? [h] : [];
      }
  }
  function d(h) {
    if (e.multiple && en('This method is not supported when using "multiple" prop'), r.value.length) {
      const v = r.value[0], y = a.findIndex((_) => _.id === v);
      let m = (y + h) % a.length, p = a[m];
      for (; p.disabled && m !== y; )
        m = (m + h) % a.length, p = a[m];
      if (p.disabled) return;
      r.value = [a[m].id];
    } else {
      const v = a.find((y) => !y.disabled);
      v && (r.value = [v.id]);
    }
  }
  const g = {
    register: s,
    unregister: l,
    selected: r,
    select: c,
    disabled: W(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (h) => r.value.includes(h),
    selectedClass: f(() => e.selectedClass),
    items: f(() => a),
    getItemIndex: (h) => Vc(a, h)
  };
  return qe(t, g), g;
}
function Vc(e, t) {
  const n = gl(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function gl(e, t) {
  const n = [];
  return t.forEach((a) => {
    const r = e.find((s) => Hn(a, s.value)), i = e[a];
    r?.value != null ? n.push(r.id) : i != null && n.push(i.id);
  }), n;
}
function Rc(e, t) {
  const n = [];
  return t.forEach((a) => {
    const r = e.findIndex((i) => i.id === a);
    if (~r) {
      const i = e[r];
      n.push(i.value != null ? i.value : r);
    }
  }), n;
}
const yl = Symbol.for("vuetify:v-btn-toggle"), Yc = A({
  ...hl(),
  ...Oc()
}, "VBtnToggle");
$()({
  name: "VBtnToggle",
  props: Yc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: r,
      prev: i,
      select: s,
      selected: l
    } = Ic(e, yl);
    return z(() => {
      const u = os.filterProps(e);
      return o(os, K({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: a,
          next: r,
          prev: i,
          select: s,
          selected: l
        })]
      });
    }), {
      next: r,
      prev: i,
      select: s
    };
  }
});
const Lc = A({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Pe = $(!1)({
  name: "VDefaultsProvider",
  props: Lc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: r,
      reset: i,
      root: s,
      scoped: l
    } = js(e);
    return jn(a, {
      reset: i,
      root: s,
      scoped: l,
      disabled: r
    }), () => n.default?.();
  }
}), ye = [String, Function, Object, Array], Nc = Symbol.for("vuetify:icons"), Aa = A({
  icon: {
    type: ye
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), us = $()({
  name: "VComponentIcon",
  props: Aa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return o(e.tag, null, {
        default: () => [e.icon ? o(a, null, null) : n.default?.()]
      });
    };
  }
}), Fc = zn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Aa(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => o(e.tag, K(n, {
      style: null
    }), {
      default: () => [o("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? o("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : o("path", {
        d: a
      }, null)) : o("path", {
        d: e.icon
      }, null)])]
    });
  }
});
zn({
  name: "VLigatureIcon",
  props: Aa(),
  setup(e) {
    return () => o(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
zn({
  name: "VClassIcon",
  props: Aa(),
  setup(e) {
    return () => o(e.tag, {
      class: e.icon
    }, null);
  }
});
const Bc = (e) => {
  const t = Te(Nc);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      const a = I(e);
      if (!a) return {
        component: us
      };
      let r = a;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = t.aliases?.[r.slice(1)])), r || en(`Could not find aliased icon "${a}"`), Array.isArray(r))
        return {
          component: Fc,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: us,
          icon: r
        };
      const i = Object.keys(t.sets).find((u) => typeof r == "string" && r.startsWith(`${u}:`)), s = i ? r.slice(i.length + 1) : r;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: s
      };
    })
  };
}, $c = ["x-small", "small", "default", "large", "x-large"], Ia = A({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return jr(() => {
    let n, a;
    return da($c, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: q(e.size),
      height: q(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const Wc = A({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ye,
  ...ee(),
  ...Ia(),
  ...Ce({
    tag: "i"
  }),
  ...Ee()
}, "VIcon"), ot = $()({
  name: "VIcon",
  props: Wc(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = H(), {
      themeClasses: i
    } = Ye(e), {
      iconData: s
    } = Bc(f(() => r.value || e.icon)), {
      sizeClasses: l
    } = Va(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Ct(W(e, "color"));
    return z(() => {
      const d = a.default?.();
      d && (r.value = sl(d).filter((h) => h.type === bu && h.children && typeof h.children == "string")[0]?.children);
      const g = !!(n.onClick || n.onClickOnce);
      return o(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: ["v-icon", "notranslate", i.value, l.value, u.value, {
          "v-icon--clickable": g,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: q(e.size),
          height: q(e.size),
          width: q(e.size)
        }, c.value, e.style],
        role: g ? "button" : void 0,
        "aria-hidden": !g,
        tabindex: g ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function _l(e, t) {
  const n = H(), a = ie(!1);
  if (Wr) {
    const r = new IntersectionObserver((i) => {
      a.value = !!i.find((s) => s.isIntersecting);
    }, t);
    xt(() => {
      r.disconnect();
    }), J(n, (i, s) => {
      s && (r.unobserve(s), a.value = !1), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
function Uc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = ma(), a = H();
  if (Ue) {
    const r = new ResizeObserver((i) => {
      i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    xt(() => {
      r.disconnect();
    }), J(() => n.el, (i, s) => {
      s && (r.unobserve(s), a.value = void 0), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Fr(a)
  };
}
const Hc = A({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...ee(),
  ...Ia(),
  ...Ce({
    tag: "div"
  }),
  ...Ee()
}, "VProgressCircular"), jc = $()({
  name: "VProgressCircular",
  props: Hc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, r = 2 * Math.PI * a, i = H(), {
      themeClasses: s
    } = Ye(e), {
      sizeClasses: l,
      sizeStyles: u
    } = Va(e), {
      textColorClasses: c,
      textColorStyles: d
    } = Ct(W(e, "color")), {
      textColorClasses: g,
      textColorStyles: h
    } = Ct(W(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: y
    } = _l(), {
      resizeRef: m,
      contentRect: p
    } = Uc(), _ = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), P = f(() => Number(e.width)), M = f(() => u.value ? Number(e.size) : p.value ? p.value.width : Math.max(P.value, 32)), w = f(() => a / (1 - P.value / M.value) * 2), x = f(() => P.value / M.value * w.value), E = f(() => q((100 - _.value) / 100 * r));
    return Rt(() => {
      v.value = i.value, m.value = i.value;
    }), z(() => o(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, s.value, l.value, c.value, e.class],
      style: [u.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : _.value
    }, {
      default: () => [o("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [o("circle", {
        class: ["v-progress-circular__underlay", g.value],
        style: h.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), o("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": E.value
      }, null)]), n.default && o("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: _.value
      })])]
    })), {};
  }
}), Lt = A({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Nt(e) {
  return {
    dimensionStyles: f(() => {
      const n = {}, a = q(e.height), r = q(e.maxHeight), i = q(e.maxWidth), s = q(e.minHeight), l = q(e.minWidth), u = q(e.width);
      return a != null && (n.height = a), r != null && (n.maxHeight = r), i != null && (n.maxWidth = i), s != null && (n.minHeight = s), l != null && (n.minWidth = l), u != null && (n.width = u), n;
    })
  };
}
const pl = Symbol.for("vuetify:locale");
function Zr() {
  const e = Te(pl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function gn() {
  const e = Te(pl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const cs = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ra = A({
  location: String
}, "location");
function Ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = gn();
  return {
    locationStyles: f(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: s
      } = gr(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function l(c) {
        return n ? n(c) : 0;
      }
      const u = {};
      return i !== "center" && (t ? u[cs[i]] = `calc(100% - ${l(i)}px)` : u[i] = 0), s !== "center" ? t ? u[cs[s]] = `calc(100% - ${l(s)}px)` : u[s] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), u;
    })
  };
}
const zc = A({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...ee(),
  ...Ra({
    location: "top"
  }),
  ...ft(),
  ...Ce(),
  ...Ee()
}, "VProgressLinear"), Gc = $()({
  name: "VProgressLinear",
  props: zc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), {
      isRtl: r,
      rtlClasses: i
    } = gn(), {
      themeClasses: s
    } = Ye(e), {
      locationStyles: l
    } = Ya(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Ct(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: g
    } = tt(f(() => e.bgColor || e.color)), {
      backgroundColorClasses: h,
      backgroundColorStyles: v
    } = tt(f(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: m
    } = tt(e, "color"), {
      roundedClasses: p
    } = vt(e), {
      intersectionRef: _,
      isIntersecting: P
    } = _l(), M = f(() => parseFloat(e.max)), w = f(() => parseFloat(e.height)), x = f(() => ca(parseFloat(e.bufferValue) / M.value * 100, 0, 100)), E = f(() => ca(parseFloat(a.value) / M.value * 100, 0, 100)), k = f(() => r.value !== e.reverse), F = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function D(V) {
      if (!_.value) return;
      const {
        left: N,
        right: b,
        width: C
      } = _.value.getBoundingClientRect(), Y = k.value ? C - V.clientX + (b - C) : V.clientX - N;
      a.value = Math.round(Y / C * M.value);
    }
    return z(() => o(e.tag, {
      ref: _,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && P.value,
        "v-progress-linear--reverse": k.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, p.value, s.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? q(w.value) : 0,
        "--v-progress-linear-height": q(w.value),
        ...e.absolute ? l.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : E.value,
      onClick: e.clickable && D
    }, {
      default: () => [e.stream && o("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: {
          ...c.value,
          [k.value ? "left" : "right"]: q(-w.value),
          borderTop: `${q(w.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${q(w.value / 4)})`,
          width: q(100 - x.value, "%"),
          "--v-progress-linear-stream-to": q(w.value * (k.value ? 1 : -1))
        }
      }, null), o("div", {
        class: ["v-progress-linear__background", d.value],
        style: [g.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), o("div", {
        class: ["v-progress-linear__buffer", h.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: q(x.value, "%")
        }]
      }, null), o(jt, {
        name: F.value
      }, {
        default: () => [e.indeterminate ? o("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((V) => o("div", {
          key: V,
          class: ["v-progress-linear__indeterminate", V, y.value],
          style: m.value
        }, null))]) : o("div", {
          class: ["v-progress-linear__determinate", y.value],
          style: [m.value, {
            width: q(E.value, "%")
          }]
        }, null)]
      }), n.default && o("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: E.value,
        buffer: x.value
      })])]
    })), {};
  }
}), Xr = A({
  loading: [Boolean, String]
}, "loader");
function Jr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return {
    loaderClasses: f(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Sl(e, t) {
  let {
    slots: n
  } = t;
  return o("div", {
    class: `${e.name}__loader`
  }, [n.default?.({
    color: e.color,
    isActive: e.active
  }) || o(Gc, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Kc = ["static", "relative", "fixed", "absolute", "sticky"], Qr = A({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Kc.includes(e)
    )
  }
}, "position");
function ei(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  return {
    positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function qc() {
  const e = Me("useRoute");
  return f(() => e?.proxy?.$route);
}
function Zc() {
  return Me("useRouter")?.proxy?.$router;
}
function ti(e, t) {
  const n = ku("RouterLink"), a = f(() => !!(e.href || e.to)), r = f(() => a?.value || zi(t, "click") || zi(e, "click"));
  if (typeof n == "string" || !("useLink" in n))
    return {
      isLink: a,
      isClickable: r,
      href: W(e, "href")
    };
  const i = f(() => ({
    ...e,
    to: W(() => e.to || "")
  })), s = n.useLink(i.value), l = f(() => e.to ? s : void 0), u = qc();
  return {
    isLink: a,
    isClickable: r,
    route: l.value?.route,
    navigate: l.value?.navigate,
    isActive: f(() => l.value ? e.exact ? u.value ? l.value.isExactActive?.value && Hn(l.value.route.value.query, u.value.query) : l.value.isExactActive?.value ?? !1 : l.value.isActive?.value ?? !1 : !1),
    href: f(() => e.to ? l.value?.route.value.href : e.href)
  };
}
const ni = A({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let rr = !1;
function Xc(e, t) {
  let n = !1, a, r;
  Ue && (We(() => {
    window.addEventListener("popstate", i), a = e?.beforeEach((s, l, u) => {
      rr ? n ? t(u) : u() : setTimeout(() => n ? t(u) : u()), rr = !0;
    }), r = e?.afterEach(() => {
      rr = !1;
    });
  }), Ze(() => {
    window.removeEventListener("popstate", i), a?.(), r?.();
  }));
  function i(s) {
    s.state?.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Jc(e, t) {
  J(() => e.isActive?.value, (n) => {
    e.isLink.value && n && t && We(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const _r = Symbol("rippleStop"), Qc = 80;
function ds(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function pr(e) {
  return e.constructor.name === "TouchEvent";
}
function bl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ed = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, r = 0;
  if (!bl(e)) {
    const g = t.getBoundingClientRect(), h = pr(e) ? e.touches[e.touches.length - 1] : e;
    a = h.clientX - g.left, r = h.clientY - g.top;
  }
  let i = 0, s = 0.3;
  t._ripple?.circle ? (s = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (r - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - i * 2) / 2}px`, u = `${(t.clientHeight - i * 2) / 2}px`, c = n.center ? l : `${a - i}px`, d = n.center ? u : `${r - i}px`;
  return {
    radius: i,
    scale: s,
    x: c,
    y: d,
    centerX: l,
    centerY: u
  };
}, _a = {
  /* eslint-disable max-statements */
  show(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const a = document.createElement("span"), r = document.createElement("span");
    a.appendChild(r), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: s,
      x: l,
      y: u,
      centerX: c,
      centerY: d
    } = ed(e, t, n), g = `${i * 2}px`;
    r.className = "v-ripple__animation", r.style.width = g, r.style.height = g, t.appendChild(a);
    const h = window.getComputedStyle(t);
    h && h.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), ds(r, `translate(${l}, ${u}) scale3d(${s},${s},${s})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
      r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), ds(r, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), r = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function kl(e) {
  return typeof e > "u" || !!e;
}
function An(e) {
  const t = {}, n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[_r])) {
    if (e[_r] = !0, pr(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || bl(e), n._ripple.class && (t.class = n._ripple.class), pr(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        _a.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Qc);
    } else
      _a.show(e, n, t);
  }
}
function fs(e) {
  e[_r] = !0;
}
function Fe(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Fe(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), _a.hide(t);
  }
}
function wl(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let In = !1;
function Cl(e) {
  !In && (e.keyCode === Ui.enter || e.keyCode === Ui.space) && (In = !0, An(e));
}
function Pl(e) {
  In = !1, Fe(e);
}
function xl(e) {
  In && (In = !1, Fe(e));
}
function Tl(e, t, n) {
  const {
    value: a,
    modifiers: r
  } = t, i = kl(a);
  if (i || _a.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = r.center, e._ripple.circle = r.circle, hr(a) && a.class && (e._ripple.class = a.class), i && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", fs, {
        passive: !0
      }), e.addEventListener("mousedown", fs);
      return;
    }
    e.addEventListener("touchstart", An, {
      passive: !0
    }), e.addEventListener("touchend", Fe, {
      passive: !0
    }), e.addEventListener("touchmove", wl, {
      passive: !0
    }), e.addEventListener("touchcancel", Fe), e.addEventListener("mousedown", An), e.addEventListener("mouseup", Fe), e.addEventListener("mouseleave", Fe), e.addEventListener("keydown", Cl), e.addEventListener("keyup", Pl), e.addEventListener("blur", xl), e.addEventListener("dragstart", Fe, {
      passive: !0
    });
  } else !i && n && Ml(e);
}
function Ml(e) {
  e.removeEventListener("mousedown", An), e.removeEventListener("touchstart", An), e.removeEventListener("touchend", Fe), e.removeEventListener("touchmove", wl), e.removeEventListener("touchcancel", Fe), e.removeEventListener("mouseup", Fe), e.removeEventListener("mouseleave", Fe), e.removeEventListener("keydown", Cl), e.removeEventListener("keyup", Pl), e.removeEventListener("dragstart", Fe), e.removeEventListener("blur", xl);
}
function td(e, t) {
  Tl(e, t, !1);
}
function nd(e) {
  delete e._ripple, Ml(e);
}
function ad(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = kl(t.oldValue);
  Tl(e, t, n);
}
const La = {
  mounted: td,
  unmounted: nd,
  updated: ad
}, rd = A({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: yl
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ye,
  appendIcon: ye,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...dn(),
  ...ee(),
  ...Tt(),
  ...Lt(),
  ...vn(),
  ...Ec(),
  ...Xr(),
  ...Ra(),
  ...Qr(),
  ...ft(),
  ...ni(),
  ...Ia(),
  ...Ce({
    tag: "button"
  }),
  ...Ee(),
  ...hn({
    variant: "elevated"
  })
}, "VBtn"), le = $()({
  name: "VBtn",
  props: rd(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Ye(e), {
      borderClasses: i
    } = fn(e), {
      densityClasses: s
    } = Yt(e), {
      dimensionStyles: l
    } = Nt(e), {
      elevationClasses: u
    } = mn(e), {
      loaderClasses: c
    } = Jr(e), {
      locationStyles: d
    } = Ya(e), {
      positionClasses: g
    } = ei(e), {
      roundedClasses: h
    } = vt(e), {
      sizeClasses: v,
      sizeStyles: y
    } = Va(e), m = Ac(e, e.symbol, !1), p = ti(e, n), _ = f(() => e.active !== void 0 ? e.active : p.isLink.value ? p.isActive?.value : m?.isSelected.value), P = f(() => ({
      color: m?.isSelected.value && (!p.isLink.value || p.isActive?.value) || !m || p.isActive?.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    })), {
      colorClasses: M,
      colorStyles: w,
      variantClasses: x
    } = Ea(P), E = f(() => m?.disabled.value || e.disabled), k = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), F = f(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function D(V) {
      E.value || p.isLink.value && (V.metaKey || V.ctrlKey || V.shiftKey || V.button !== 0 || n.target === "_blank") || (p.navigate?.(V), m?.toggle());
    }
    return Jc(p, m?.select), z(() => {
      const V = p.isLink.value ? "a" : e.tag, N = !!(e.prependIcon || a.prepend), b = !!(e.appendIcon || a.append), C = !!(e.icon && e.icon !== !0);
      return nt(o(V, {
        type: V === "a" ? void 0 : "button",
        class: ["v-btn", m?.selectedClass.value, {
          "v-btn--active": _.value,
          "v-btn--block": e.block,
          "v-btn--disabled": E.value,
          "v-btn--elevated": k.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, r.value, i.value, M.value, s.value, u.value, c.value, g.value, h.value, v.value, x.value, e.class],
        style: [w.value, l.value, d.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: E.value || void 0,
        href: p.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: D,
        value: F.value
      }, {
        default: () => [Oa(!0, "v-btn"), !e.icon && N && o("span", {
          key: "prepend",
          class: "v-btn__prepend"
        }, [a.prepend ? o(Pe, {
          key: "prepend-defaults",
          disabled: !e.prependIcon,
          defaults: {
            VIcon: {
              icon: e.prependIcon
            }
          }
        }, a.prepend) : o(ot, {
          key: "prepend-icon",
          icon: e.prependIcon
        }, null)]), o("span", {
          class: "v-btn__content",
          "data-no-activator": ""
        }, [!a.default && C ? o(ot, {
          key: "content-icon",
          icon: e.icon
        }, null) : o(Pe, {
          key: "content-defaults",
          disabled: !C,
          defaults: {
            VIcon: {
              icon: e.icon
            }
          }
        }, {
          default: () => [a.default?.() ?? e.text]
        })]), !e.icon && b && o("span", {
          key: "append",
          class: "v-btn__append"
        }, [a.append ? o(Pe, {
          key: "append-defaults",
          disabled: !e.appendIcon,
          defaults: {
            VIcon: {
              icon: e.appendIcon
            }
          }
        }, a.append) : o(ot, {
          key: "append-icon",
          icon: e.appendIcon
        }, null)]), !!e.loading && o("span", {
          key: "loader",
          class: "v-btn__loader"
        }, [a.loader?.() ?? o(jc, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: !0,
          width: "2"
        }, null)])]
      }), [[La, !E.value && !!e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: m
    };
  }
}), id = A({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ee(),
  ...Ce()
}, "VContainer"), sd = $()({
  name: "VContainer",
  props: id(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = gn();
    return z(() => o(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: e.style
    }, n)), {};
  }
}), Na = ["sm", "md", "lg", "xl", "xxl"], ld = Symbol.for("vuetify:display");
function od() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  const n = Te(ld);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = f(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), r = f(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: r,
    mobile: a
  };
}
const Dl = Na.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Ol = Na.reduce((e, t) => {
  const n = "offset" + $n(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), El = Na.reduce((e, t) => {
  const n = "order" + $n(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), vs = {
  col: Object.keys(Dl),
  offset: Object.keys(Ol),
  order: Object.keys(El)
};
function ud(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const cd = ["auto", "start", "end", "center", "baseline", "stretch"], dd = A({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Dl,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Ol,
  order: {
    type: [String, Number],
    default: null
  },
  ...El,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => cd.includes(e)
  },
  ...ee(),
  ...Ce()
}, "VCol"), ue = $()({
  name: "VCol",
  props: dd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => {
      const r = [];
      let i;
      for (i in vs)
        vs[i].forEach((l) => {
          const u = e[l], c = ud(i, l, u);
          c && r.push(c);
        });
      const s = r.some((l) => l.startsWith("v-col-"));
      return r.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !s || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), r;
    });
    return () => on(e.tag, {
      class: [a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), ai = ["start", "end", "center"], Al = ["space-between", "space-around", "space-evenly"];
function ri(e, t) {
  return Na.reduce((n, a) => {
    const r = e + $n(a);
    return n[r] = t(), n;
  }, {});
}
const fd = [...ai, "baseline", "stretch"], Il = (e) => fd.includes(e), Vl = ri("align", () => ({
  type: String,
  default: null,
  validator: Il
})), vd = [...ai, ...Al], Rl = (e) => vd.includes(e), Yl = ri("justify", () => ({
  type: String,
  default: null,
  validator: Rl
})), md = [...ai, ...Al, "stretch"], Ll = (e) => md.includes(e), Nl = ri("alignContent", () => ({
  type: String,
  default: null,
  validator: Ll
})), ms = {
  align: Object.keys(Vl),
  justify: Object.keys(Yl),
  alignContent: Object.keys(Nl)
}, hd = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function gd(e, t, n) {
  let a = hd[e];
  if (n != null) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const yd = A({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Il
  },
  ...Vl,
  justify: {
    type: String,
    default: null,
    validator: Rl
  },
  ...Yl,
  alignContent: {
    type: String,
    default: null,
    validator: Ll
  },
  ...Nl,
  ...ee(),
  ...Ce()
}, "VRow"), de = $()({
  name: "VRow",
  props: yd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => {
      const r = [];
      let i;
      for (i in ms)
        ms[i].forEach((s) => {
          const l = e[s], u = gd(i, s, l);
          u && r.push(u);
        });
      return r.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), r;
    });
    return () => on(e.tag, {
      class: ["v-row", a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Fa = Da("v-spacer", "div", "VSpacer"), _d = A({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function He(e, t, n) {
  return $()({
    name: e,
    props: _d({
      mode: n,
      origin: t
    }),
    setup(a, r) {
      let {
        slots: i
      } = r;
      const s = {
        onBeforeEnter(l) {
          a.origin && (l.style.transformOrigin = a.origin);
        },
        onLeave(l) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: g
            } = l;
            l._transitionInitialStyles = {
              position: l.style.position,
              top: l.style.top,
              left: l.style.left,
              width: l.style.width,
              height: l.style.height
            }, l.style.position = "absolute", l.style.top = `${u}px`, l.style.left = `${c}px`, l.style.width = `${d}px`, l.style.height = `${g}px`;
          }
          a.hideOnLeave && l.style.setProperty("display", "none", "important");
        },
        onAfterLeave(l) {
          if (a.leaveAbsolute && l?._transitionInitialStyles) {
            const {
              position: u,
              top: c,
              left: d,
              width: g,
              height: h
            } = l._transitionInitialStyles;
            delete l._transitionInitialStyles, l.style.position = u || "", l.style.top = c || "", l.style.left = d || "", l.style.width = g || "", l.style.height = h || "";
          }
        }
      };
      return () => {
        const l = a.group ? Br : jt;
        return on(l, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : s
        }, i.default);
      };
    }
  });
}
function Fl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return $()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, r) {
      let {
        slots: i
      } = r;
      const s = a.group ? Br : jt;
      return () => on(s, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function Bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = zs(`offset-${n}`);
  return {
    onBeforeEnter(s) {
      s._parent = s.parentNode, s._initialStyle = {
        transition: s.style.transition,
        overflow: s.style.overflow,
        [n]: s.style[n]
      };
    },
    onEnter(s) {
      const l = s._initialStyle;
      s.style.setProperty("transition", "none", "important"), s.style.overflow = "hidden";
      const u = `${s[a]}px`;
      s.style[n] = "0", s.offsetHeight, s.style.transition = l.transition, e && s._parent && s._parent.classList.add(e), requestAnimationFrame(() => {
        s.style[n] = u;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(s) {
      s._initialStyle = {
        transition: "",
        overflow: s.style.overflow,
        [n]: s.style[n]
      }, s.style.overflow = "hidden", s.style[n] = `${s[a]}px`, s.offsetHeight, requestAnimationFrame(() => s.style[n] = "0");
    },
    onAfterLeave: r,
    onLeaveCancelled: r
  };
  function r(s) {
    e && s._parent && s._parent.classList.remove(e), i(s);
  }
  function i(s) {
    const l = s._initialStyle[n];
    s.style.overflow = s._initialStyle.overflow, l != null && (s.style[n] = l), delete s._initialStyle;
  }
}
const pd = A({
  target: [Object, Array]
}, "v-dialog-transition"), $l = $()({
  name: "VDialogTransition",
  props: pd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(r) {
        r.style.pointerEvents = "none", r.style.visibility = "hidden";
      },
      async onEnter(r, i) {
        await new Promise((h) => requestAnimationFrame(h)), await new Promise((h) => requestAnimationFrame(h)), r.style.visibility = "";
        const {
          x: s,
          y: l,
          sx: u,
          sy: c,
          speed: d
        } = gs(e.target, r), g = Xt(r, [{
          transform: `translate(${s}px, ${l}px) scale(${u}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: wc
        });
        hs(r)?.forEach((h) => {
          Xt(h, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: ga
          });
        }), g.finished.then(() => i());
      },
      onAfterEnter(r) {
        r.style.removeProperty("pointer-events");
      },
      onBeforeLeave(r) {
        r.style.pointerEvents = "none";
      },
      async onLeave(r, i) {
        await new Promise((h) => requestAnimationFrame(h));
        const {
          x: s,
          y: l,
          sx: u,
          sy: c,
          speed: d
        } = gs(e.target, r);
        Xt(r, [{}, {
          transform: `translate(${s}px, ${l}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Cc
        }).finished.then(() => i()), hs(r)?.forEach((h) => {
          Xt(h, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: ga
          });
        });
      },
      onAfterLeave(r) {
        r.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? o(jt, K({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : o(jt, {
      name: "dialog-transition"
    }, n);
  }
});
function hs(e) {
  const t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return t && [...t];
}
function gs(e, t) {
  const n = dl(e), a = zr(t), [r, i] = getComputedStyle(t).transformOrigin.split(" ").map((_) => parseFloat(_)), [s, l] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = n.left + n.width / 2;
  s === "left" || l === "left" ? u -= n.width / 2 : (s === "right" || l === "right") && (u += n.width / 2);
  let c = n.top + n.height / 2;
  s === "top" || l === "top" ? c -= n.height / 2 : (s === "bottom" || l === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, g = n.height / a.height, h = Math.max(1, d, g), v = d / h || 0, y = g / h || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), p = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return {
    x: u - (r + a.left),
    y: c - (i + a.top),
    sx: v,
    sy: y,
    speed: p
  };
}
He("fab-transition", "center center", "out-in");
He("dialog-bottom-transition");
He("dialog-top-transition");
const Sd = He("fade-transition");
He("scale-transition");
He("scroll-x-transition");
He("scroll-x-reverse-transition");
He("scroll-y-transition");
He("scroll-y-reverse-transition");
He("slide-x-transition");
He("slide-x-reverse-transition");
const Wl = He("slide-y-transition");
He("slide-y-reverse-transition");
const bd = Fl("expand-transition", Bl()), kd = Fl("expand-x-transition", Bl("", !0)), Sr = Symbol.for("vuetify:list");
function Ul() {
  const e = Te(Sr, {
    hasPrepend: ie(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: ie(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return qe(Sr, t), e;
}
function Hl() {
  return Te(Sr, null);
}
const ii = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: r,
        activated: i
      } = n;
      return a = $e(a), e && !r && i.size === 1 && i.has(a) || (r ? i.add(a) : i.delete(a)), i;
    },
    in: (n, a, r) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const s of Re(n))
          i = t.activate({
            id: s,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: r
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, jl = (e) => {
  const t = ii(e);
  return {
    activate: (a) => {
      let {
        activated: r,
        id: i,
        ...s
      } = a;
      i = $e(i);
      const l = r.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...s,
        id: i,
        activated: l
      });
    },
    in: (a, r, i) => {
      let s = /* @__PURE__ */ new Set();
      if (a != null) {
        const l = Re(a);
        l.length && (s = t.in(l.slice(0, 1), r, i));
      }
      return s;
    },
    out: (a, r, i) => t.out(a, r, i)
  };
}, wd = (e) => {
  const t = ii(e);
  return {
    activate: (a) => {
      let {
        id: r,
        activated: i,
        children: s,
        ...l
      } = a;
      return r = $e(r), s.has(r) ? i : t.activate({
        id: r,
        activated: i,
        children: s,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, Cd = (e) => {
  const t = jl(e);
  return {
    activate: (a) => {
      let {
        id: r,
        activated: i,
        children: s,
        ...l
      } = a;
      return r = $e(r), s.has(r) ? i : t.activate({
        id: r,
        activated: i,
        children: s,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, Pd = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let s = r.get(t);
      for (; s != null; )
        i.add(s), s = r.get(s);
      return i;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, zl = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      let i = r.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = r.get(i);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, xd = {
  open: zl.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (!n) return a;
    const i = [];
    let s = r.get(t);
    for (; s != null; )
      i.push(s), s = r.get(s);
    return new Set(i);
  }
}, si = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: i
      } = n;
      if (a = $e(a), e && !r) {
        const s = Array.from(i.entries()).reduce((l, u) => {
          let [c, d] = u;
          return d === "on" && l.push(c), l;
        }, []);
        if (s.length === 1 && s[0] === a) return i;
      }
      return i.set(a, r ? "on" : "off"), i;
    },
    in: (n, a, r) => {
      let i = /* @__PURE__ */ new Map();
      for (const s of n || [])
        i = t.select({
          id: s,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: r
        });
      return i;
    },
    out: (n) => {
      const a = [];
      for (const [r, i] of n.entries())
        i === "on" && a.push(r);
      return a;
    }
  };
  return t;
}, Gl = (e) => {
  const t = si(e);
  return {
    select: (a) => {
      let {
        selected: r,
        id: i,
        ...s
      } = a;
      i = $e(i);
      const l = r.has(i) ? /* @__PURE__ */ new Map([[i, r.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...s,
        id: i,
        selected: l
      });
    },
    in: (a, r, i) => {
      let s = /* @__PURE__ */ new Map();
      return a?.length && (s = t.in(a.slice(0, 1), r, i)), s;
    },
    out: (a, r, i) => t.out(a, r, i)
  };
}, Td = (e) => {
  const t = si(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: i,
        children: s,
        ...l
      } = a;
      return r = $e(r), s.has(r) ? i : t.select({
        id: r,
        selected: i,
        children: s,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, Md = (e) => {
  const t = Gl(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: i,
        children: s,
        ...l
      } = a;
      return r = $e(r), s.has(r) ? i : t.select({
        id: r,
        selected: i,
        children: s,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, Dd = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: i,
        children: s,
        parents: l
      } = n;
      a = $e(a);
      const u = new Map(i), c = [a];
      for (; c.length; ) {
        const g = c.shift();
        i.set(g, r ? "on" : "off"), s.has(g) && c.push(...s.get(g));
      }
      let d = l.get(a);
      for (; d; ) {
        const g = s.get(d), h = g.every((y) => i.get(y) === "on"), v = g.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(d, h ? "on" : v ? "off" : "indeterminate"), d = l.get(d);
      }
      return e && !r && Array.from(i.entries()).reduce((h, v) => {
        let [y, m] = v;
        return m === "on" && h.push(y), h;
      }, []).length === 0 ? u : i;
    },
    in: (n, a, r) => {
      let i = /* @__PURE__ */ new Map();
      for (const s of n || [])
        i = t.select({
          id: s,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: r
        });
      return i;
    },
    out: (n, a) => {
      const r = [];
      for (const [i, s] of n.entries())
        s === "on" && !a.has(i) && r.push(i);
      return r;
    }
  };
  return t;
}, Vn = Symbol.for("vuetify:nested"), Kl = {
  id: ie(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: H(/* @__PURE__ */ new Map()),
    children: H(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: H(!1),
    selectable: H(!1),
    opened: H(/* @__PURE__ */ new Set()),
    activated: H(/* @__PURE__ */ new Set()),
    selected: H(/* @__PURE__ */ new Map()),
    selectedValues: H([])
  }
}, Od = A({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Ed = (e) => {
  let t = !1;
  const n = H(/* @__PURE__ */ new Map()), a = H(/* @__PURE__ */ new Map()), r = _e(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), i = f(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return wd(e.mandatory);
      case "single-leaf":
        return Cd(e.mandatory);
      case "independent":
        return ii(e.mandatory);
      case "single-independent":
      default:
        return jl(e.mandatory);
    }
  }), s = f(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Md(e.mandatory);
      case "leaf":
        return Td(e.mandatory);
      case "independent":
        return si(e.mandatory);
      case "single-independent":
        return Gl(e.mandatory);
      case "classic":
      default:
        return Dd(e.mandatory);
    }
  }), l = f(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return xd;
      case "single":
        return Pd;
      case "multiple":
      default:
        return zl;
    }
  }), u = _e(e, "activated", e.activated, (v) => i.value.in(v, n.value, a.value), (v) => i.value.out(v, n.value, a.value)), c = _e(e, "selected", e.selected, (v) => s.value.in(v, n.value, a.value), (v) => s.value.out(v, n.value, a.value));
  xt(() => {
    t = !0;
  });
  function d(v) {
    const y = [];
    let m = v;
    for (; m != null; )
      y.unshift(m), m = a.value.get(m);
    return y;
  }
  const g = Me("nested"), h = {
    id: ie(),
    root: {
      opened: r,
      activatable: W(e, "activatable"),
      selectable: W(e, "selectable"),
      activated: u,
      selected: c,
      selectedValues: f(() => {
        const v = [];
        for (const [y, m] of c.value.entries())
          m === "on" && v.push(y);
        return v;
      }),
      register: (v, y, m) => {
        y && v !== y && a.value.set(v, y), m && n.value.set(v, []), y != null && n.value.set(y, [...n.value.get(y) || [], v]);
      },
      unregister: (v) => {
        if (t) return;
        n.value.delete(v);
        const y = a.value.get(v);
        if (y) {
          const m = n.value.get(y) ?? [];
          n.value.set(y, m.filter((p) => p !== v));
        }
        a.value.delete(v), r.value.delete(v);
      },
      open: (v, y, m) => {
        g.emit("click:open", {
          id: v,
          value: y,
          path: d(v),
          event: m
        });
        const p = l.value.open({
          id: v,
          value: y,
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (r.value = p);
      },
      openOnSelect: (v, y, m) => {
        const p = l.value.select({
          id: v,
          value: y,
          selected: new Map(c.value),
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (r.value = p);
      },
      select: (v, y, m) => {
        g.emit("click:select", {
          id: v,
          value: y,
          path: d(v),
          event: m
        });
        const p = s.value.select({
          id: v,
          value: y,
          selected: new Map(c.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (c.value = p), h.root.openOnSelect(v, y, m);
      },
      activate: (v, y, m) => {
        if (!e.activatable)
          return h.root.select(v, !0, m);
        g.emit("click:activate", {
          id: v,
          value: y,
          path: d(v),
          event: m
        });
        const p = i.value.activate({
          id: v,
          value: y,
          activated: new Set(u.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (u.value = p);
      },
      children: n,
      parents: a
    }
  };
  return qe(Vn, h), h.root;
}, ql = (e, t) => {
  const n = Te(Vn, Kl), a = Symbol(dt()), r = f(() => e.value !== void 0 ? e.value : a), i = {
    ...n,
    id: r,
    open: (s, l) => n.root.open(r.value, s, l),
    openOnSelect: (s, l) => n.root.openOnSelect(r.value, s, l),
    isOpen: f(() => n.root.opened.value.has(r.value)),
    parent: f(() => n.root.parents.value.get(r.value)),
    activate: (s, l) => n.root.activate(r.value, s, l),
    isActivated: f(() => n.root.activated.value.has($e(r.value))),
    select: (s, l) => n.root.select(r.value, s, l),
    isSelected: f(() => n.root.selected.value.get($e(r.value)) === "on"),
    isIndeterminate: f(() => n.root.selected.value.get(r.value) === "indeterminate"),
    isLeaf: f(() => !n.root.children.value.get(r.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(r.value, n.id.value, t), xt(() => {
    !n.isGroupActivator && n.root.unregister(r.value);
  }), t && qe(Vn, i), i;
}, Ad = () => {
  const e = Te(Vn, Kl);
  qe(Vn, {
    ...e,
    isGroupActivator: !0
  });
};
function Id() {
  const e = ie(!1);
  return un(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: f(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Fr(e)
  };
}
const Ba = A({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), lt = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: r,
    group: i,
    ...s
  } = e, {
    component: l = i ? Br : jt,
    ...u
  } = typeof a == "object" ? a : {};
  return on(l, K(typeof a == "string" ? {
    name: r ? "" : a
  } : u, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: r,
    group: i
  }).filter((c) => {
    let [d, g] = c;
    return g !== void 0;
  })), s), n);
}, Vd = zn({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ad(), () => n.default?.();
  }
}), Rd = A({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ye,
    default: "$collapse"
  },
  expandIcon: {
    type: ye,
    default: "$expand"
  },
  prependIcon: ye,
  appendIcon: ye,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ee(),
  ...Ce()
}, "VListGroup"), ys = $()({
  name: "VListGroup",
  props: Rd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: r,
      id: i
    } = ql(W(e, "value"), !0), s = f(() => `v-list-group--id-${String(i.value)}`), l = Hl(), {
      isBooted: u
    } = Id();
    function c(v) {
      v.stopPropagation(), r(!a.value, v);
    }
    const d = f(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: s.value
    })), g = f(() => a.value ? e.collapseIcon : e.expandIcon), h = f(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && g.value,
        appendIcon: e.appendIcon || !e.subgroup && g.value,
        title: e.title,
        value: e.value
      }
    }));
    return z(() => o(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": l?.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && o(Pe, {
        defaults: h.value
      }, {
        default: () => [o(Vd, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), o(lt, {
        transition: {
          component: bd
        },
        disabled: !u.value
      }, {
        default: () => [nt(o("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": s.value
        }, [n.default?.()]), [[Wn, a.value]])]
      })]
    })), {
      isOpen: a
    };
  }
}), Yd = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VListItemSubtitle"), Ld = $()({
  name: "VListItemSubtitle",
  props: Yd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Zl = Da("v-list-item-title");
function Nd(e) {
  return {
    aspectStyles: f(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Xl = A({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ee(),
  ...Lt()
}, "VResponsive"), _s = $()({
  name: "VResponsive",
  props: Xl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Nd(e), {
      dimensionStyles: r
    } = Nt(e);
    return z(() => o("div", {
      class: ["v-responsive", {
        "v-responsive--inline": e.inline
      }, e.class],
      style: [r.value, e.style]
    }, [o("div", {
      class: "v-responsive__sizer",
      style: a.value
    }, null), n.additional?.(), n.default && o("div", {
      class: ["v-responsive__content", e.contentClass]
    }, [n.default()])])), {};
  }
});
function Fd(e, t) {
  if (!Wr) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: r,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, s = new IntersectionObserver(function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const c = e._observe?.[t.instance.$.uid];
    if (!c) return;
    const d = l.some((g) => g.isIntersecting);
    r && (!n.quiet || c.init) && (!n.once || d || c.init) && r(d, l, u), d && n.once ? Jl(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function Jl(e, t) {
  const n = e._observe?.[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ql = {
  mounted: Fd,
  unmounted: Jl
}, Bd = A({
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Xl(),
  ...ee(),
  ...ft(),
  ...Ba()
}, "VImg"), eo = $()({
  name: "VImg",
  directives: {
    intersect: Ql
  },
  props: Bd(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: i
    } = tt(W(e, "color")), {
      roundedClasses: s
    } = vt(e), l = Me("VImg"), u = ie(""), c = H(), d = ie(e.eager ? "loading" : "idle"), g = ie(), h = ie(), v = f(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = f(() => v.value.aspect || g.value / h.value || 0);
    J(() => e.src, () => {
      m(d.value !== "idle");
    }), J(y, (b, C) => {
      !b && C && c.value && w(c.value);
    }), Gs(() => m());
    function m(b) {
      if (!(e.eager && b) && !(Wr && !b && !e.eager)) {
        if (d.value = "loading", v.value.lazySrc) {
          const C = new Image();
          C.src = v.value.lazySrc, w(C, null);
        }
        v.value.src && We(() => {
          n("loadstart", c.value?.currentSrc || v.value.src), setTimeout(() => {
            if (!l.isUnmounted)
              if (c.value?.complete) {
                if (c.value.naturalWidth || _(), d.value === "error") return;
                y.value || w(c.value, null), d.value === "loading" && p();
              } else
                y.value || w(c.value), P();
          });
        });
      }
    }
    function p() {
      l.isUnmounted || (P(), w(c.value), d.value = "loaded", n("load", c.value?.currentSrc || v.value.src));
    }
    function _() {
      l.isUnmounted || (d.value = "error", n("error", c.value?.currentSrc || v.value.src));
    }
    function P() {
      const b = c.value;
      b && (u.value = b.currentSrc || b.src);
    }
    let M = -1;
    xt(() => {
      clearTimeout(M);
    });
    function w(b) {
      let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const Y = () => {
        if (clearTimeout(M), l.isUnmounted) return;
        const {
          naturalHeight: U,
          naturalWidth: j
        } = b;
        U || j ? (g.value = j, h.value = U) : !b.complete && d.value === "loading" && C != null ? M = window.setTimeout(Y, C) : (b.currentSrc.endsWith(".svg") || b.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, h.value = 1);
      };
      Y();
    }
    const x = f(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), E = () => {
      if (!v.value.src || d.value === "idle") return null;
      const b = o("img", {
        class: ["v-img__img", x.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: p,
        onError: _
      }, null), C = a.sources?.();
      return o(lt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [nt(C ? o("picture", {
          class: "v-img__picture"
        }, [C, b]) : b, [[Wn, d.value === "loaded"]])]
      });
    }, k = () => o(lt, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && d.value !== "loaded" && o("img", {
        class: ["v-img__img", "v-img__img--preload", x.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), F = () => a.placeholder ? o(lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && o("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, D = () => a.error ? o(lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && o("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, V = () => e.gradient ? o("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, N = ie(!1);
    {
      const b = J(y, (C) => {
        C && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            N.value = !0;
          });
        }), b());
      });
    }
    return z(() => {
      const b = _s.filterProps(e);
      return nt(o(_s, K({
        class: ["v-img", {
          "v-img--booting": !N.value
        }, r.value, s.value, e.class],
        style: [{
          width: q(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, b, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => o(Ie, null, [o(E, null, null), o(k, null, null), o(V, null, null), o(F, null, null), o(D, null, null)]),
        default: a.default
      }), [[cn("intersect"), {
        handler: m,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: c,
      state: d,
      naturalWidth: g,
      naturalHeight: h
    };
  }
}), $d = A({
  start: Boolean,
  end: Boolean,
  icon: ye,
  image: String,
  text: String,
  ...ee(),
  ...Tt(),
  ...ft(),
  ...Ia(),
  ...Ce(),
  ...Ee(),
  ...hn({
    variant: "flat"
  })
}, "VAvatar"), pa = $()({
  name: "VAvatar",
  props: $d(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ye(e), {
      colorClasses: r,
      colorStyles: i,
      variantClasses: s
    } = Ea(e), {
      densityClasses: l
    } = Yt(e), {
      roundedClasses: u
    } = vt(e), {
      sizeClasses: c,
      sizeStyles: d
    } = Va(e);
    return z(() => o(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, r.value, l.value, u.value, c.value, s.value, e.class],
      style: [i.value, d.value, e.style]
    }, {
      default: () => [n.default ? o(Pe, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? o(eo, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? o(ot, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Oa(!1, "v-avatar")]
    })), {};
  }
}), Wd = A({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ye,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Be(),
  onClickOnce: Be(),
  ...dn(),
  ...ee(),
  ...Tt(),
  ...Lt(),
  ...vn(),
  ...ft(),
  ...ni(),
  ...Ce(),
  ...Ee(),
  ...hn({
    variant: "text"
  })
}, "VListItem"), br = $()({
  name: "VListItem",
  directives: {
    Ripple: La
  },
  props: Wd(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const i = ti(e, n), s = f(() => e.value === void 0 ? i.href.value : e.value), {
      activate: l,
      isActivated: u,
      select: c,
      isSelected: d,
      isIndeterminate: g,
      isGroupActivator: h,
      root: v,
      parent: y,
      openOnSelect: m
    } = ql(s, !1), p = Hl(), _ = f(() => e.active !== !1 && (e.active || i.isActive?.value || (v.activatable.value ? u.value : d.value))), P = f(() => e.link !== !1 && i.isLink.value), M = f(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!p && (v.selectable.value || v.activatable.value || e.value != null))), w = f(() => e.rounded || e.nav), x = f(() => e.color ?? e.activeColor), E = f(() => ({
      color: _.value ? x.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    J(() => i.isActive?.value, (ne) => {
      ne && y.value != null && v.open(y.value, !0), ne && m(ne);
    }, {
      immediate: !0
    });
    const {
      themeClasses: k
    } = Ye(e), {
      borderClasses: F
    } = fn(e), {
      colorClasses: D,
      colorStyles: V,
      variantClasses: N
    } = Ea(E), {
      densityClasses: b
    } = Yt(e), {
      dimensionStyles: C
    } = Nt(e), {
      elevationClasses: Y
    } = mn(e), {
      roundedClasses: U
    } = vt(w), j = f(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ce = f(() => ({
      isActive: _.value,
      select: c,
      isSelected: d.value,
      isIndeterminate: g.value
    }));
    function te(ne) {
      r("click", ne), M.value && (i.navigate?.(ne), !h && (v.activatable.value ? l(!u.value, ne) : (v.selectable.value || e.value != null) && c(!d.value, ne)));
    }
    function Se(ne) {
      (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), te(ne));
    }
    return z(() => {
      const ne = P.value ? "a" : e.tag, we = a.title || e.title != null, Le = a.subtitle || e.subtitle != null, Ne = !!(e.appendAvatar || e.appendIcon), Qe = !!(Ne || a.append), Ot = !!(e.prependAvatar || e.prependIcon), oe = !!(Ot || a.prepend);
      return p?.updateHasPrepend(oe), e.activeColor && mc("active-color", ["color", "base-color"]), nt(o(ne, {
        class: ["v-list-item", {
          "v-list-item--active": _.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": M.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !oe && p?.hasPrepend.value,
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && _.value
        }, k.value, F.value, D.value, b.value, Y.value, j.value, U.value, N.value, e.class],
        style: [V.value, C.value, e.style],
        href: i.href.value,
        tabindex: M.value ? p ? -2 : 0 : void 0,
        onClick: te,
        onKeydown: M.value && !P.value && Se
      }, {
        default: () => [Oa(M.value || _.value, "v-list-item"), oe && o("div", {
          key: "prepend",
          class: "v-list-item__prepend"
        }, [a.prepend ? o(Pe, {
          key: "prepend-defaults",
          disabled: !Ot,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            },
            VListItemAction: {
              start: !0
            }
          }
        }, {
          default: () => [a.prepend?.(ce.value)]
        }) : o(Ie, null, [e.prependAvatar && o(pa, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && o(ot, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)]), o("div", {
          class: "v-list-item__spacer"
        }, null)]), o("div", {
          class: "v-list-item__content",
          "data-no-activator": ""
        }, [we && o(Zl, {
          key: "title"
        }, {
          default: () => [a.title?.({
            title: e.title
          }) ?? e.title]
        }), Le && o(Ld, {
          key: "subtitle"
        }, {
          default: () => [a.subtitle?.({
            subtitle: e.subtitle
          }) ?? e.subtitle]
        }), a.default?.(ce.value)]), Qe && o("div", {
          key: "append",
          class: "v-list-item__append"
        }, [a.append ? o(Pe, {
          key: "append-defaults",
          disabled: !Ne,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            },
            VListItemAction: {
              end: !0
            }
          }
        }, {
          default: () => [a.append?.(ce.value)]
        }) : o(Ie, null, [e.appendIcon && o(ot, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && o(pa, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)]), o("div", {
          class: "v-list-item__spacer"
        }, null)])]
      }), [[cn("ripple"), M.value && e.ripple]]);
    }), {
      activate: l,
      isActivated: u,
      isGroupActivator: h,
      isSelected: d,
      list: p,
      select: c
    };
  }
}), Ud = A({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ee(),
  ...Ce()
}, "VListSubheader"), Hd = $()({
  name: "VListSubheader",
  props: Ud(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: r
    } = Ct(W(e, "color"));
    return z(() => {
      const i = !!(n.default || e.title);
      return o(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: r
        }, e.style]
      }, {
        default: () => [i && o("div", {
          class: "v-list-subheader__text"
        }, [n.default?.() ?? e.title])]
      });
    }), {};
  }
}), jd = A({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ee(),
  ...Ee()
}, "VDivider"), zd = $()({
  name: "VDivider",
  props: jd(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Ye(e), {
      textColorClasses: i,
      textColorStyles: s
    } = Ct(W(e, "color")), l = f(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = q(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = q(e.thickness)), u;
    });
    return z(() => {
      const u = o("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, r.value, i.value, e.class],
        style: [l.value, s.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? o("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [u, o("div", {
        class: "v-divider__content"
      }, [a.default()]), u]) : u;
    }), {};
  }
}), Gd = A({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), to = $()({
  name: "VListChildren",
  props: Gd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ul(), () => n.default?.() ?? e.items?.map((a) => {
      let {
        children: r,
        props: i,
        type: s,
        raw: l
      } = a;
      if (s === "divider")
        return n.divider?.({
          props: i
        }) ?? o(zd, i, null);
      if (s === "subheader")
        return n.subheader?.({
          props: i
        }) ?? o(Hd, i, null);
      const u = {
        subtitle: n.subtitle ? (d) => n.subtitle?.({
          ...d,
          item: l
        }) : void 0,
        prepend: n.prepend ? (d) => n.prepend?.({
          ...d,
          item: l
        }) : void 0,
        append: n.append ? (d) => n.append?.({
          ...d,
          item: l
        }) : void 0,
        title: n.title ? (d) => n.title?.({
          ...d,
          item: l
        }) : void 0
      }, c = ys.filterProps(i);
      return r ? o(ys, K({
        value: i?.value
      }, c), {
        activator: (d) => {
          let {
            props: g
          } = d;
          const h = {
            ...i,
            ...g,
            value: e.returnObject ? l : i.value
          };
          return n.header ? n.header({
            props: h
          }) : o(br, h, u);
        },
        default: () => o(to, {
          items: r,
          returnObject: e.returnObject
        }, n)
      }) : n.item ? n.item({
        props: i
      }) : o(br, K(i, {
        value: e.returnObject ? l : i.value
      }), u);
    });
  }
}), Kd = A({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: Hn
  }
}, "list-items");
function qd(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Zd(e, t) {
  const n = kn(t, e.itemType, "item"), a = qd(t) ? t : kn(t, e.itemTitle), r = kn(t, e.itemValue, void 0), i = kn(t, e.itemChildren), s = e.itemProps === !0 ? wt(t, ["children"]) : kn(t, e.itemProps), l = {
    title: a,
    value: r,
    ...s
  };
  return {
    type: n,
    title: l.title,
    value: l.value,
    props: l,
    children: n === "item" && i ? no(e, i) : void 0,
    raw: t
  };
}
function no(e, t) {
  const n = [];
  for (const a of t)
    n.push(Zd(e, a));
  return n;
}
function Xd(e) {
  return {
    items: f(() => no(e, e.items))
  };
}
const Jd = A({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Be(),
  "onClick:select": Be(),
  "onUpdate:opened": Be(),
  ...Od({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...dn(),
  ...ee(),
  ...Tt(),
  ...Lt(),
  ...vn(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Kd(),
  ...ft(),
  ...Ce(),
  ...Ee(),
  ...hn({
    variant: "text"
  })
}, "VList"), Qd = $()({
  name: "VList",
  props: Jd(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = Xd(e), {
      themeClasses: r
    } = Ye(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: s
    } = tt(W(e, "bgColor")), {
      borderClasses: l
    } = fn(e), {
      densityClasses: u
    } = Yt(e), {
      dimensionStyles: c
    } = Nt(e), {
      elevationClasses: d
    } = mn(e), {
      roundedClasses: g
    } = vt(e), {
      children: h,
      open: v,
      parents: y,
      select: m
    } = Ed(e), p = f(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = W(e, "activeColor"), P = W(e, "baseColor"), M = W(e, "color");
    Ul(), jn({
      VListGroup: {
        activeColor: _,
        baseColor: P,
        color: M,
        expandIcon: W(e, "expandIcon"),
        collapseIcon: W(e, "collapseIcon")
      },
      VListItem: {
        activeClass: W(e, "activeClass"),
        activeColor: _,
        baseColor: P,
        color: M,
        density: W(e, "density"),
        disabled: W(e, "disabled"),
        lines: W(e, "lines"),
        nav: W(e, "nav"),
        slim: W(e, "slim"),
        variant: W(e, "variant")
      }
    });
    const w = ie(!1), x = H();
    function E(b) {
      w.value = !0;
    }
    function k(b) {
      w.value = !1;
    }
    function F(b) {
      !w.value && !(b.relatedTarget && x.value?.contains(b.relatedTarget)) && N();
    }
    function D(b) {
      const C = b.target;
      if (!(!x.value || ["INPUT", "TEXTAREA"].includes(C.tagName))) {
        if (b.key === "ArrowDown")
          N("next");
        else if (b.key === "ArrowUp")
          N("prev");
        else if (b.key === "Home")
          N("first");
        else if (b.key === "End")
          N("last");
        else
          return;
        b.preventDefault();
      }
    }
    function V(b) {
      w.value = !0;
    }
    function N(b) {
      if (x.value)
        return va(x.value, b);
    }
    return z(() => o(e.tag, {
      ref: x,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, r.value, i.value, l.value, u.value, d.value, p.value, g.value, e.class],
      style: [s.value, c.value, e.style],
      tabindex: e.disabled || w.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: E,
      onFocusout: k,
      onFocus: F,
      onKeydown: D,
      onMousedown: V
    }, {
      default: () => [o(to, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: m,
      focus: N,
      children: h,
      parents: y
    };
  }
});
function ir(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function ef(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ps(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, r = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return ir({
      x: r,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, r = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return ir({
      x: r,
      y: i
    }, t);
  }
  return ir({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const ao = {
  static: af,
  // specific viewport position, usually centered
  connected: sf
  // connected to a certain element
}, tf = A({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in ao
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function nf(e, t) {
  const n = H({}), a = H();
  Ue && sn(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    J(() => e.locationStrategy, i), Ze(() => {
      window.removeEventListener("resize", r), a.value = void 0;
    }), window.addEventListener("resize", r, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = e.locationStrategy(t, e, n)?.updateLocation : a.value = ao[e.locationStrategy](t, e, n)?.updateLocation;
  });
  function r(i) {
    a.value?.(i);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function af() {
}
function rf(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = zr(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function sf(e, t, n) {
  (Array.isArray(e.target.value) || Tc(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: r,
    preferredOrigin: i
  } = jr(() => {
    const y = gr(t.location, e.isRtl.value), m = t.origin === "overlap" ? y : t.origin === "auto" ? nr(y) : gr(t.origin, e.isRtl.value);
    return y.side === m.side && y.align === ar(m).align ? {
      preferredAnchor: Ki(y),
      preferredOrigin: Ki(m)
    } : {
      preferredAnchor: y,
      preferredOrigin: m
    };
  }), [s, l, u, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => f(() => {
    const m = parseFloat(t[y]);
    return isNaN(m) ? 1 / 0 : m;
  })), d = f(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const y = t.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let g = !1;
  const h = new ResizeObserver(() => {
    g && v();
  });
  J([e.target, e.contentEl], (y, m) => {
    let [p, _] = y, [P, M] = m;
    P && !Array.isArray(P) && h.unobserve(P), p && !Array.isArray(p) && h.observe(p), M && h.unobserve(M), _ && h.observe(_);
  }, {
    immediate: !0
  }), Ze(() => {
    h.disconnect();
  });
  function v() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value) return;
    const y = dl(e.target.value), m = rf(e.contentEl.value, e.isRtl.value), p = ya(e.contentEl.value), _ = 12;
    p.length || (p.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (m.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), m.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const P = p.reduce((N, b) => {
      const C = b.getBoundingClientRect(), Y = new Ut({
        x: b === document.documentElement ? 0 : C.x,
        y: b === document.documentElement ? 0 : C.y,
        width: b.clientWidth,
        height: b.clientHeight
      });
      return N ? new Ut({
        x: Math.max(N.left, Y.left),
        y: Math.max(N.top, Y.top),
        width: Math.min(N.right, Y.right) - Math.max(N.left, Y.left),
        height: Math.min(N.bottom, Y.bottom) - Math.max(N.top, Y.top)
      }) : Y;
    }, void 0);
    P.x += _, P.y += _, P.width -= _ * 2, P.height -= _ * 2;
    let M = {
      anchor: r.value,
      origin: i.value
    };
    function w(N) {
      const b = new Ut(m), C = ps(N.anchor, y), Y = ps(N.origin, b);
      let {
        x: U,
        y: j
      } = ef(C, Y);
      switch (N.anchor.side) {
        case "top":
          j -= d.value[0];
          break;
        case "bottom":
          j += d.value[0];
          break;
        case "left":
          U -= d.value[0];
          break;
        case "right":
          U += d.value[0];
          break;
      }
      switch (N.anchor.align) {
        case "top":
          j -= d.value[1];
          break;
        case "bottom":
          j += d.value[1];
          break;
        case "left":
          U -= d.value[1];
          break;
        case "right":
          U += d.value[1];
          break;
      }
      return b.x += U, b.y += j, b.width = Math.min(b.width, u.value), b.height = Math.min(b.height, c.value), {
        overflows: Zi(b, P),
        x: U,
        y: j
      };
    }
    let x = 0, E = 0;
    const k = {
      x: 0,
      y: 0
    }, F = {
      x: !1,
      y: !1
    };
    let D = -1;
    for (; ; ) {
      if (D++ > 10) {
        vc("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: N,
        y: b,
        overflows: C
      } = w(M);
      x += N, E += b, m.x += N, m.y += b;
      {
        const Y = qi(M.anchor), U = C.x.before || C.x.after, j = C.y.before || C.y.after;
        let ce = !1;
        if (["x", "y"].forEach((te) => {
          if (te === "x" && U && !F.x || te === "y" && j && !F.y) {
            const Se = {
              anchor: {
                ...M.anchor
              },
              origin: {
                ...M.origin
              }
            }, ne = te === "x" ? Y === "y" ? ar : nr : Y === "y" ? nr : ar;
            Se.anchor = ne(Se.anchor), Se.origin = ne(Se.origin);
            const {
              overflows: we
            } = w(Se);
            (we[te].before <= C[te].before && we[te].after <= C[te].after || we[te].before + we[te].after < (C[te].before + C[te].after) / 2) && (M = Se, ce = F[te] = !0);
          }
        }), ce) continue;
      }
      C.x.before && (x += C.x.before, m.x += C.x.before), C.x.after && (x -= C.x.after, m.x -= C.x.after), C.y.before && (E += C.y.before, m.y += C.y.before), C.y.after && (E -= C.y.after, m.y -= C.y.after);
      {
        const Y = Zi(m, P);
        k.x = P.width - Y.x.before - Y.x.after, k.y = P.height - Y.y.before - Y.y.after, x += Y.x.before, m.x += Y.x.before, E += Y.y.before, m.y += Y.y.before;
      }
      break;
    }
    const V = qi(M.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${M.anchor.side} ${M.anchor.align}`,
      transformOrigin: `${M.origin.side} ${M.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: q(sr(E)),
      left: e.isRtl.value ? void 0 : q(sr(x)),
      right: e.isRtl.value ? q(sr(-x)) : void 0,
      minWidth: q(V === "y" ? Math.min(s.value, y.width) : s.value),
      maxWidth: q(Ss(ca(k.x, s.value === 1 / 0 ? 0 : s.value, u.value))),
      maxHeight: q(Ss(ca(k.y, l.value === 1 / 0 ? 0 : l.value, c.value)))
    }), {
      available: k,
      contentBox: m
    };
  }
  return J(() => [r.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => v()), We(() => {
    const y = v();
    if (!y) return;
    const {
      available: m,
      contentBox: p
    } = y;
    p.height > m.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function sr(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ss(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let kr = !0;
const Sa = [];
function lf(e) {
  !kr || Sa.length ? (Sa.push(e), wr()) : (kr = !1, e(), wr());
}
let bs = -1;
function wr() {
  cancelAnimationFrame(bs), bs = requestAnimationFrame(() => {
    const e = Sa.shift();
    e && e(), Sa.length ? wr() : kr = !0;
  });
}
const ro = {
  none: null,
  close: cf,
  block: df,
  reposition: ff
}, of = A({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in ro
  }
}, "VOverlay-scroll-strategies");
function uf(e, t) {
  if (!Ue) return;
  let n;
  Rt(async () => {
    n?.stop(), t.isActive.value && e.scrollStrategy && (n = Nr(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : ro[e.scrollStrategy]?.(t, e, n);
    }));
  }), Ze(() => {
    n?.stop();
  });
}
function cf(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  io(e.targetEl.value ?? e.contentEl.value, t);
}
function df(e, t) {
  const n = e.root.value?.offsetParent, a = [.../* @__PURE__ */ new Set([...ya(e.targetEl.value, t.contained ? n : void 0), ...ya(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => Kr(s) && s)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((s, l) => {
    s.style.setProperty("--v-body-scroll-x", q(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", q(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", q(r)), s.classList.add("v-overlay-scroll-blocked");
  }), Ze(() => {
    a.forEach((s, l) => {
      const u = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), d = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -u, s.scrollTop = -c, s.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function ff(e, t, n) {
  let a = !1, r = -1, i = -1;
  function s(l) {
    lf(() => {
      const u = performance.now();
      e.updateLocation.value?.(l), a = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    n.run(() => {
      io(e.targetEl.value ?? e.contentEl.value, (l) => {
        a ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            s(l);
          });
        })) : s(l);
      });
    });
  }), Ze(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(r);
  });
}
function io(e, t) {
  const n = [document, ...ya(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ze(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Cr = Symbol.for("vuetify:v-menu"), vf = A({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function mf(e, t) {
  let n = () => {
  };
  function a(s) {
    n?.();
    const l = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = tc(l, () => {
        t?.(s), u(s);
      });
    });
  }
  function r() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: r,
    runCloseDelay: i
  };
}
const hf = A({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...vf()
}, "VOverlay-activator");
function gf(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const r = Me("useActivator"), i = H();
  let s = !1, l = !1, u = !0;
  const c = f(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = f(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: h
  } = mf(e, (k) => {
    k === (e.openOnHover && s || c.value && l) && !(e.openOnHover && n.value && !a.value) && (n.value !== k && (u = !0), n.value = k);
  }), v = H(), y = {
    onClick: (k) => {
      k.stopPropagation(), i.value = k.currentTarget || k.target, n.value || (v.value = [k.clientX, k.clientY]), n.value = !n.value;
    },
    onMouseenter: (k) => {
      k.sourceCapabilities?.firesTouchEvents || (s = !0, i.value = k.currentTarget || k.target, g());
    },
    onMouseleave: (k) => {
      s = !1, h();
    },
    onFocus: (k) => {
      ul(k.target, ":focus-visible") !== !1 && (l = !0, k.stopPropagation(), i.value = k.currentTarget || k.target, g());
    },
    onBlur: (k) => {
      l = !1, k.stopPropagation(), h();
    }
  }, m = f(() => {
    const k = {};
    return d.value && (k.onClick = y.onClick), e.openOnHover && (k.onMouseenter = y.onMouseenter, k.onMouseleave = y.onMouseleave), c.value && (k.onFocus = y.onFocus, k.onBlur = y.onBlur), k;
  }), p = f(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      s = !0, g();
    }, k.onMouseleave = () => {
      s = !1, h();
    }), c.value && (k.onFocusin = () => {
      l = !0, g();
    }, k.onFocusout = () => {
      l = !1, h();
    }), e.closeOnContentClick) {
      const F = Te(Cr, null);
      k.onClick = () => {
        n.value = !1, F?.closeParents();
      };
    }
    return k;
  }), _ = f(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      u && (s = !0, u = !1, g());
    }, k.onMouseleave = () => {
      s = !1, h();
    }), k;
  });
  J(a, (k) => {
    k && (e.openOnHover && !s && (!c.value || !l) || c.value && !l && (!e.openOnHover || !s)) && (n.value = !1);
  }), J(n, (k) => {
    k || setTimeout(() => {
      v.value = void 0;
    });
  }, {
    flush: "post"
  });
  const P = ma();
  Rt(() => {
    P.value && We(() => {
      i.value = P.el;
    });
  });
  const M = ma(), w = f(() => e.target === "cursor" && v.value ? v.value : M.value ? M.el : so(e.target, r) || i.value), x = f(() => Array.isArray(w.value) ? void 0 : w.value);
  let E;
  return J(() => !!e.activator, (k) => {
    k && Ue ? (E = Nr(), E.run(() => {
      yf(e, r, {
        activatorEl: i,
        activatorEvents: m
      });
    })) : E && E.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ze(() => {
    E?.stop();
  }), {
    activatorEl: i,
    activatorRef: P,
    target: w,
    targetEl: x,
    targetRef: M,
    activatorEvents: m,
    contentEvents: p,
    scrimEvents: _
  };
}
function yf(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: r
  } = n;
  J(() => e.activator, (u, c) => {
    if (c && u !== c) {
      const d = l(c);
      d && s(d);
    }
    u && We(() => i());
  }, {
    immediate: !0
  }), J(() => e.activatorProps, () => {
    i();
  }), Ze(() => {
    s();
  });
  function i() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && rc(u, K(r.value, c));
  }
  function s() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && ic(u, K(r.value, c));
  }
  function l() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = so(u, t);
    return a.value = c?.nodeType === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function so(e, t) {
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = t?.proxy?.$el?.parentNode;
    for (; a?.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function _f() {
  if (!Ue) return ie(!1);
  const {
    ssr: e
  } = od();
  if (e) {
    const t = ie(!1);
    return un(() => {
      t.value = !0;
    }), t;
  } else
    return ie(!0);
}
const pf = A({
  eager: Boolean
}, "lazy");
function Sf(e, t) {
  const n = ie(!1), a = f(() => n.value || e.eager || t.value);
  J(t, () => n.value = !0);
  function r() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: r
  };
}
function li() {
  const t = Me("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ks = Symbol.for("vuetify:stack"), wn = Bn([]);
function bf(e, t, n) {
  const a = Me("useStack"), r = !n, i = Te(ks, void 0), s = Bn({
    activeChildren: /* @__PURE__ */ new Set()
  });
  qe(ks, s);
  const l = ie(+t.value);
  sn(e, () => {
    const d = wn.at(-1)?.[1];
    l.value = d ? d + 10 : +t.value, r && wn.push([a.uid, l.value]), i?.activeChildren.add(a.uid), Ze(() => {
      if (r) {
        const g = $e(wn).findIndex((h) => h[0] === a.uid);
        wn.splice(g, 1);
      }
      i?.activeChildren.delete(a.uid);
    });
  });
  const u = ie(!0);
  r && Rt(() => {
    const d = wn.at(-1)?.[0] === a.uid;
    setTimeout(() => u.value = d);
  });
  const c = f(() => !s.activeChildren.size);
  return {
    globalTop: Fr(u),
    localTop: c,
    stackStyles: f(() => ({
      zIndex: l.value
    }))
  };
}
function kf(e) {
  return {
    teleportTarget: f(() => {
      const n = e.value;
      if (n === !0 || !Ue) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        Ta(`Unable to locate target ${n}`);
        return;
      }
      let r = a.querySelector(":scope > .v-overlay-container");
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", a.appendChild(r)), r;
    })
  };
}
function wf() {
  return !0;
}
function lo(e, t, n) {
  if (!e || oo(e, n) === !1) return !1;
  const a = ml(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const r = (typeof n.value == "object" && n.value.include || (() => []))();
  return r.push(t), !r.some((i) => i?.contains(e.target));
}
function oo(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || wf)(e);
}
function Cf(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && lo(e, t, n) && setTimeout(() => {
    oo(e, n) && a && a(e);
  }, 0);
}
function ws(e, t) {
  const n = ml(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Pf = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (r) => Cf(r, e, t), a = (r) => {
      e._clickOutside.lastMousedownWasOutside = lo(r, e, t);
    };
    ws(e, (r) => {
      r.addEventListener("click", n, !0), r.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (ws(e, (n) => {
      if (!n || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: a,
        onMousedown: r
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", r, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function xf(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return o(jt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && o("div", K({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const oi = A({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...hf(),
  ...ee(),
  ...Lt(),
  ...pf(),
  ...tf(),
  ...of(),
  ...Ee(),
  ...Ba()
}, "VOverlay"), Rn = $()({
  name: "VOverlay",
  directives: {
    ClickOutside: Pf
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...oi()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: r
    } = t;
    const i = _e(e, "modelValue"), s = f({
      get: () => i.value,
      set: (oe) => {
        oe && e.disabled || (i.value = oe);
      }
    }), {
      themeClasses: l
    } = Ye(e), {
      rtlClasses: u,
      isRtl: c
    } = gn(), {
      hasContent: d,
      onAfterLeave: g
    } = Sf(e, s), h = tt(f(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: v,
      localTop: y,
      stackStyles: m
    } = bf(s, W(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: p,
      activatorRef: _,
      target: P,
      targetEl: M,
      targetRef: w,
      activatorEvents: x,
      contentEvents: E,
      scrimEvents: k
    } = gf(e, {
      isActive: s,
      isTop: y
    }), F = f(() => p?.value?.getRootNode()), {
      teleportTarget: D
    } = kf(f(() => e.attach || e.contained || F.value instanceof ShadowRoot ? F.value ?? !0 : !1)), {
      dimensionStyles: V
    } = Nt(e), N = _f(), {
      scopeId: b
    } = li();
    J(() => e.disabled, (oe) => {
      oe && (s.value = !1);
    });
    const C = H(), Y = H(), U = H(), {
      contentStyles: j,
      updateLocation: ce
    } = nf(e, {
      isRtl: c,
      contentEl: U,
      target: P,
      isActive: s
    });
    uf(e, {
      root: C,
      contentEl: U,
      targetEl: M,
      isActive: s,
      updateLocation: ce
    });
    function te(oe) {
      r("click:outside", oe), e.persistent ? Ne() : s.value = !1;
    }
    function Se(oe) {
      return s.value && v.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || oe.target === Y.value);
    }
    Ue && J(s, (oe) => {
      oe ? window.addEventListener("keydown", ne) : window.removeEventListener("keydown", ne);
    }, {
      immediate: !0
    }), xt(() => {
      Ue && window.removeEventListener("keydown", ne);
    });
    function ne(oe) {
      oe.key === "Escape" && v.value && (e.persistent ? Ne() : (s.value = !1, U.value?.contains(document.activeElement) && p.value?.focus()));
    }
    const we = Zc();
    sn(() => e.closeOnBack, () => {
      Xc(we, (oe) => {
        v.value && s.value ? (oe(!1), e.persistent ? Ne() : s.value = !1) : oe();
      });
    });
    const Le = H();
    J(() => s.value && (e.absolute || e.contained) && D.value == null, (oe) => {
      if (oe) {
        const Sn = Pc(C.value);
        Sn && Sn !== document.scrollingElement && (Le.value = Sn.scrollTop);
      }
    });
    function Ne() {
      e.noClickAnimation || U.value && Xt(U.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: ga
      });
    }
    function Qe() {
      r("afterEnter");
    }
    function Ot() {
      g(), r("afterLeave");
    }
    return z(() => o(Ie, null, [n.activator?.({
      isActive: s.value,
      targetRef: w,
      props: K({
        ref: _
      }, x.value, e.activatorProps)
    }), N.value && d.value && o(wu, {
      disabled: !D.value,
      to: D.value
    }, {
      default: () => [o("div", K({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": s.value,
          "v-overlay--contained": e.contained
        }, l.value, u.value, e.class],
        style: [m.value, {
          "--v-overlay-opacity": e.opacity,
          top: q(Le.value)
        }, e.style],
        ref: C
      }, b, a), [o(xf, K({
        color: h,
        modelValue: s.value && !!e.scrim,
        ref: Y
      }, k.value), null), o(lt, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: P.value,
        onAfterEnter: Qe,
        onAfterLeave: Ot
      }, {
        default: () => [nt(o("div", K({
          ref: U,
          class: ["v-overlay__content", e.contentClass],
          style: [V.value, j.value]
        }, E.value, e.contentProps), [n.default?.({
          isActive: s
        })]), [[Wn, s.value], [cn("click-outside"), {
          handler: te,
          closeConditional: Se,
          include: () => [p.value]
        }]])]
      })])]
    })])), {
      activatorEl: p,
      scrimEl: Y,
      target: P,
      animateClick: Ne,
      contentEl: U,
      globalTop: v,
      localTop: y,
      updateLocation: ce
    };
  }
}), lr = Symbol("Forwarded refs");
function or(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function ui(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[lr] = n, new Proxy(e, {
    get(r, i) {
      if (Reflect.has(r, i))
        return Reflect.get(r, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n)
          if (s.value && Reflect.has(s.value, i)) {
            const l = Reflect.get(s.value, i);
            return typeof l == "function" ? l.bind(s.value) : l;
          }
      }
    },
    has(r, i) {
      if (Reflect.has(r, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const s of n)
        if (s.value && Reflect.has(s.value, i))
          return !0;
      return !1;
    },
    set(r, i, s) {
      if (Reflect.has(r, i))
        return Reflect.set(r, i, s);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const l of n)
        if (l.value && Reflect.has(l.value, i))
          return Reflect.set(l.value, i, s);
      return !1;
    },
    getOwnPropertyDescriptor(r, i) {
      const s = Reflect.getOwnPropertyDescriptor(r, i);
      if (s) return s;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const l of n) {
          if (!l.value) continue;
          const u = or(l.value, i) ?? ("_" in l.value ? or(l.value._?.setupState, i) : void 0);
          if (u) return u;
        }
        for (const l of n) {
          const u = l.value && l.value[lr];
          if (!u) continue;
          const c = u.slice();
          for (; c.length; ) {
            const d = c.shift(), g = or(d.value, i);
            if (g) return g;
            const h = d.value && d.value[lr];
            h && c.push(...h);
          }
        }
      }
    }
  });
}
const Tf = A({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...wt(oi({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: $l
    }
  }), ["absolute"])
}, "VMenu"), Mf = $()({
  name: "VMenu",
  props: Tf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), {
      scopeId: r
    } = li(), i = dt(), s = f(() => e.id || `v-menu-${i}`), l = H(), u = Te(Cr, null), c = ie(0);
    qe(Cr, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(m) {
        setTimeout(() => {
          !c.value && !e.persistent && (m == null || m && !nc(m, l.value.contentEl)) && (a.value = !1, u?.closeParents());
        }, 40);
      }
    });
    async function d(m) {
      const p = m.relatedTarget, _ = m.target;
      await We(), a.value && p !== _ && l.value?.contentEl && // We're the topmost menu
      l.value?.globalTop && // It isn't the document or the menu body
      ![document, l.value.contentEl].includes(_) && // It isn't inside the menu body
      !l.value.contentEl.contains(_) && fa(l.value.contentEl)[0]?.focus();
    }
    J(a, (m) => {
      m ? (u?.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (u?.unregister(), document.removeEventListener("focusin", d));
    });
    function g(m) {
      u?.closeParents(m);
    }
    function h(m) {
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), ol(fa(l.value?.contentEl, !1), m.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (a.value = !1, l.value?.activatorEl?.focus());
        } else ["Enter", " "].includes(m.key) && e.closeOnContentClick && (a.value = !1, u?.closeParents());
    }
    function v(m) {
      if (e.disabled) return;
      const p = l.value?.contentEl;
      p && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), va(p, "next")) : m.key === "ArrowUp" && (m.preventDefault(), va(p, "prev")) : ["ArrowDown", "ArrowUp"].includes(m.key) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
    }
    const y = f(() => K({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": s.value,
      onKeydown: v
    }, e.activatorProps));
    return z(() => {
      const m = Rn.filterProps(e);
      return o(Rn, K({
        ref: l,
        id: s.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (p) => a.value = p,
        absolute: !0,
        activatorProps: y.value,
        "onClick:outside": g,
        onKeydown: h
      }, r), {
        activator: n.activator,
        default: function() {
          for (var p = arguments.length, _ = new Array(p), P = 0; P < p; P++)
            _[P] = arguments[P];
          return o(Pe, {
            root: "VMenu"
          }, {
            default: () => [n.default?.(..._)]
          });
        }
      });
    }), ui({
      id: s,
      ΨopenChildren: c
    }, l);
  }
}), uo = A({
  color: String,
  ...dn(),
  ...ee(),
  ...Lt(),
  ...vn(),
  ...Ra(),
  ...Qr(),
  ...ft(),
  ...Ce(),
  ...Ee()
}, "VSheet"), Pr = $()({
  name: "VSheet",
  props: uo(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ye(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: i
    } = tt(W(e, "color")), {
      borderClasses: s
    } = fn(e), {
      dimensionStyles: l
    } = Nt(e), {
      elevationClasses: u
    } = mn(e), {
      locationStyles: c
    } = Ya(e), {
      positionClasses: d
    } = ei(e), {
      roundedClasses: g
    } = vt(e);
    return z(() => o(e.tag, {
      class: ["v-sheet", a.value, r.value, s.value, u.value, d.value, g.value, e.class],
      style: [i.value, l.value, c.value, e.style]
    }, n)), {};
  }
}), Df = {
  key: 2,
  class: "text-lighten-2 mt-n2 caption"
}, Of = { key: 0 }, Ef = { key: 1 }, Af = {
  __name: "DateSelector",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), i = f(() => a.getConfig), s = f(() => a.isPresetsIconShown), l = f(() => a.isCalendarIconShown), u = f(() => a.getFormattedDate), c = f(() => a.getPrimaryPresets), d = f(() => a.getPresetLabel), g = f(() => a.getPresetLabelSmall), h = (m) => {
      a.dialog_opened = m;
    }, v = t, y = (m) => {
      a.SET_PRIMARY_PRESET(m), a.SET_CONFIG(), v("change", i.value);
    };
    return (m, p) => (Z(), he(Pr, {
      class: "pa-2 date-selector rounded",
      onClick: p[0] || (p[0] = (_) => h(!0))
    }, {
      default: O(() => [
        o(de, { "no-gutters": "" }, {
          default: O(() => [
            l.value ? (Z(), he(ue, {
              key: 0,
              cols: "1",
              class: "mr-2"
            }, {
              default: O(() => [
                o(le, {
                  variant: "text",
                  rounded: "",
                  icon: i.value.compare ? "mdi-calendar-month" : "mdi-free-cancellation"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })) : De("", !0),
            o(ue, { class: "ml-3" }, {
              default: O(() => [
                i.value.primaryPreset ? (Z(), ze("div", {
                  key: 0,
                  class: oa(["text-h6", { "mt-1": !i.value.compare || !r.value }])
                }, bn(d.value(i.value.primaryPreset)), 3)) : (Z(), ze("div", {
                  key: 1,
                  class: oa(["text-subtitle-1", { "mt-2": !i.value.compare || !r.value }])
                }, bn(u.value(i.value.dateStart, i.value.dateUntil)), 3)),
                r.value && i.value.compare ? (Z(), ze("div", Df, [
                  i.value.comparePreset ? (Z(), ze("div", Of, "vs " + bn(g.value(i.value.comparePreset)), 1)) : (Z(), ze("div", Ef, "vs " + bn(u.value(i.value.compareStart, i.value.compareUntil)), 1))
                ])) : De("", !0)
              ]),
              _: 1
            }),
            s.value ? (Z(), he(ue, {
              key: 1,
              cols: "1",
              class: "mr-4"
            }, {
              default: O(() => [
                o(Mf, {
                  "offset-y": "",
                  left: ""
                }, {
                  activator: O(({ props: _ }) => [
                    o(le, K({
                      rounded: "",
                      variant: "text"
                    }, _, { icon: "mdi-chevron-down" }), null, 16)
                  ]),
                  default: O(() => [
                    o(Qd, null, {
                      default: O(() => [
                        (Z(!0), ze(Ie, null, Cu(c.value, (_, P) => (Z(), he(br, {
                          key: P,
                          onClick: (M) => y(_)
                        }, {
                          default: O(() => [
                            o(Zl, null, {
                              default: O(() => [
                                be(bn(d.value(_)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : De("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}, If = /* @__PURE__ */ Un(Af, [["__scopeId", "data-v-155b21fb"]]);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var co;
function S() {
  return co.apply(null, arguments);
}
function Vf(e) {
  co = e;
}
function at(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ht(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ae(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ci(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (ae(e, t))
      return !1;
  return !0;
}
function Ve(e) {
  return e === void 0;
}
function Pt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Gn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function fo(e, t) {
  var n = [], a, r = e.length;
  for (a = 0; a < r; ++a)
    n.push(t(e[a], a));
  return n;
}
function At(e, t) {
  for (var n in t)
    ae(t, n) && (e[n] = t[n]);
  return ae(t, "toString") && (e.toString = t.toString), ae(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function mt(e, t, n, a) {
  return Ro(e, t, n, a, !0).utc();
}
function Rf() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function G(e) {
  return e._pf == null && (e._pf = Rf()), e._pf;
}
var xr;
Array.prototype.some ? xr = Array.prototype.some : xr = function(e) {
  var t = Object(this), n = t.length >>> 0, a;
  for (a = 0; a < n; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function di(e) {
  var t = null, n = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = G(e), n = xr.call(t.parsedDateParts, function(r) {
    return r != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function $a(e) {
  var t = mt(NaN);
  return e != null ? At(G(t), e) : G(t).userInvalidated = !0, t;
}
var Cs = S.momentProperties = [], ur = !1;
function fi(e, t) {
  var n, a, r, i = Cs.length;
  if (Ve(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ve(t._i) || (e._i = t._i), Ve(t._f) || (e._f = t._f), Ve(t._l) || (e._l = t._l), Ve(t._strict) || (e._strict = t._strict), Ve(t._tzm) || (e._tzm = t._tzm), Ve(t._isUTC) || (e._isUTC = t._isUTC), Ve(t._offset) || (e._offset = t._offset), Ve(t._pf) || (e._pf = G(t)), Ve(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      a = Cs[n], r = t[a], Ve(r) || (e[a] = r);
  return e;
}
function Kn(e) {
  fi(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ur === !1 && (ur = !0, S.updateOffset(this), ur = !1);
}
function rt(e) {
  return e instanceof Kn || e != null && e._isAMomentObject != null;
}
function vo(e) {
  S.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Xe(e, t) {
  var n = !0;
  return At(function() {
    if (S.deprecationHandler != null && S.deprecationHandler(null, e), n) {
      var a = [], r, i, s, l = arguments.length;
      for (i = 0; i < l; i++) {
        if (r = "", typeof arguments[i] == "object") {
          r += `
[` + i + "] ";
          for (s in arguments[0])
            ae(arguments[0], s) && (r += s + ": " + arguments[0][s] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[i];
        a.push(r);
      }
      vo(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ps = {};
function mo(e, t) {
  S.deprecationHandler != null && S.deprecationHandler(e, t), Ps[e] || (vo(t), Ps[e] = !0);
}
S.suppressDeprecationWarnings = !1;
S.deprecationHandler = null;
function ht(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Yf(e) {
  var t, n;
  for (n in e)
    ae(e, n) && (t = e[n], ht(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Tr(e, t) {
  var n = At({}, e), a;
  for (a in t)
    ae(t, a) && (Ht(e[a]) && Ht(t[a]) ? (n[a] = {}, At(n[a], e[a]), At(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]);
  for (a in e)
    ae(e, a) && !ae(t, a) && Ht(e[a]) && (n[a] = At({}, n[a]));
  return n;
}
function vi(e) {
  e != null && this.set(e);
}
var Mr;
Object.keys ? Mr = Object.keys : Mr = function(e) {
  var t, n = [];
  for (t in e)
    ae(e, t) && n.push(t);
  return n;
};
var Lf = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Nf(e, t, n) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return ht(a) ? a.call(t, n) : a;
}
function ut(e, t, n) {
  var a = "" + Math.abs(e), r = t - a.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var mi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ea = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = {}, tn = {};
function B(e, t, n, a) {
  var r = a;
  typeof a == "string" && (r = function() {
    return this[a]();
  }), e && (tn[e] = r), t && (tn[t[0]] = function() {
    return ut(r.apply(this, arguments), t[1], t[2]);
  }), n && (tn[n] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function Ff(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Bf(e) {
  var t = e.match(mi), n, a;
  for (n = 0, a = t.length; n < a; n++)
    tn[t[n]] ? t[n] = tn[t[n]] : t[n] = Ff(t[n]);
  return function(r) {
    var i = "", s;
    for (s = 0; s < a; s++)
      i += ht(t[s]) ? t[s].call(r, e) : t[s];
    return i;
  };
}
function ia(e, t) {
  return e.isValid() ? (t = ho(t, e.localeData()), cr[t] = cr[t] || Bf(t), cr[t](e)) : e.localeData().invalidDate();
}
function ho(e, t) {
  var n = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (ea.lastIndex = 0; n >= 0 && ea.test(e); )
    e = e.replace(
      ea,
      a
    ), ea.lastIndex = 0, n -= 1;
  return e;
}
var $f = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Wf(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(mi).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Uf = "Invalid date";
function Hf() {
  return this._invalidDate;
}
var jf = "%d", zf = /\d{1,2}/;
function Gf(e) {
  return this._ordinal.replace("%d", e);
}
var Kf = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function qf(e, t, n, a) {
  var r = this._relativeTime[n];
  return ht(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
}
function Zf(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return ht(n) ? n(t) : n.replace(/%s/i, t);
}
var xs = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Je(e) {
  return typeof e == "string" ? xs[e] || xs[e.toLowerCase()] : void 0;
}
function hi(e) {
  var t = {}, n, a;
  for (a in e)
    ae(e, a) && (n = Je(a), n && (t[n] = e[a]));
  return t;
}
var Xf = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Jf(e) {
  var t = [], n;
  for (n in e)
    ae(e, n) && t.push({ unit: n, priority: Xf[n] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
var go = /\d/, je = /\d\d/, yo = /\d{3}/, gi = /\d{4}/, Wa = /[+-]?\d{6}/, ve = /\d\d?/, _o = /\d\d\d\d?/, po = /\d\d\d\d\d\d?/, Ua = /\d{1,3}/, yi = /\d{1,4}/, Ha = /[+-]?\d{1,6}/, yn = /\d+/, ja = /[+-]?\d+/, Qf = /Z|[+-]\d\d:?\d\d/gi, za = /Z|[+-]\d\d(?::?\d\d)?/gi, ev = /[+-]?\d+(\.\d{1,3})?/, qn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _n = /^[1-9]\d?/, _i = /^([1-9]\d|\d)/, ba;
ba = {};
function R(e, t, n) {
  ba[e] = ht(t) ? t : function(a, r) {
    return a && n ? n : t;
  };
}
function tv(e, t) {
  return ae(ba, e) ? ba[e](t._strict, t._locale) : new RegExp(nv(e));
}
function nv(e) {
  return bt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, a, r, i) {
        return n || a || r || i;
      }
    )
  );
}
function bt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Ge(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function X(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Ge(t)), n;
}
var Dr = {};
function se(e, t) {
  var n, a = t, r;
  for (typeof e == "string" && (e = [e]), Pt(t) && (a = function(i, s) {
    s[t] = X(i);
  }), r = e.length, n = 0; n < r; n++)
    Dr[e[n]] = a;
}
function Zn(e, t) {
  se(e, function(n, a, r, i) {
    r._w = r._w || {}, t(n, r._w, r, i);
  });
}
function av(e, t, n) {
  t != null && ae(Dr, e) && Dr[e](t, n._a, n, e);
}
function Ga(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Oe = 0, pt = 1, st = 2, ke = 3, et = 4, St = 5, $t = 6, rv = 7, iv = 8;
B("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ut(e, 4) : "+" + e;
});
B(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
B(0, ["YYYY", 4], 0, "year");
B(0, ["YYYYY", 5], 0, "year");
B(0, ["YYYYYY", 6, !0], 0, "year");
R("Y", ja);
R("YY", ve, je);
R("YYYY", yi, gi);
R("YYYYY", Ha, Wa);
R("YYYYYY", Ha, Wa);
se(["YYYYY", "YYYYYY"], Oe);
se("YYYY", function(e, t) {
  t[Oe] = e.length === 2 ? S.parseTwoDigitYear(e) : X(e);
});
se("YY", function(e, t) {
  t[Oe] = S.parseTwoDigitYear(e);
});
se("Y", function(e, t) {
  t[Oe] = parseInt(e, 10);
});
function On(e) {
  return Ga(e) ? 366 : 365;
}
S.parseTwoDigitYear = function(e) {
  return X(e) + (X(e) > 68 ? 1900 : 2e3);
};
var So = pn("FullYear", !0);
function sv() {
  return Ga(this.year());
}
function pn(e, t) {
  return function(n) {
    return n != null ? (bo(this, e, n), S.updateOffset(this, t), this) : Yn(this, e);
  };
}
function Yn(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, a = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return a ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return a ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return a ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return a ? n.getUTCHours() : n.getHours();
    case "Date":
      return a ? n.getUTCDate() : n.getDate();
    case "Day":
      return a ? n.getUTCDay() : n.getDay();
    case "Month":
      return a ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return a ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function bo(e, t, n) {
  var a, r, i, s, l;
  if (!(!e.isValid() || isNaN(n))) {
    switch (a = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? a.setUTCMilliseconds(n) : a.setMilliseconds(n));
      case "Seconds":
        return void (r ? a.setUTCSeconds(n) : a.setSeconds(n));
      case "Minutes":
        return void (r ? a.setUTCMinutes(n) : a.setMinutes(n));
      case "Hours":
        return void (r ? a.setUTCHours(n) : a.setHours(n));
      case "Date":
        return void (r ? a.setUTCDate(n) : a.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    i = n, s = e.month(), l = e.date(), l = l === 29 && s === 1 && !Ga(i) ? 28 : l, r ? a.setUTCFullYear(i, s, l) : a.setFullYear(i, s, l);
  }
}
function lv(e) {
  return e = Je(e), ht(this[e]) ? this[e]() : this;
}
function ov(e, t) {
  if (typeof e == "object") {
    e = hi(e);
    var n = Jf(e), a, r = n.length;
    for (a = 0; a < r; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = Je(e), ht(this[e]))
    return this[e](t);
  return this;
}
function uv(e, t) {
  return (e % t + t) % t;
}
var pe;
Array.prototype.indexOf ? pe = Array.prototype.indexOf : pe = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function pi(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = uv(t, 12);
  return e += (t - n) / 12, n === 1 ? Ga(e) ? 29 : 28 : 31 - n % 7 % 2;
}
B("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
B("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
B("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
R("M", ve, _n);
R("MM", ve, je);
R("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
R("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
se(["M", "MM"], function(e, t) {
  t[pt] = X(e) - 1;
});
se(["MMM", "MMMM"], function(e, t, n, a) {
  var r = n._locale.monthsParse(e, a, n._strict);
  r != null ? t[pt] = r : G(n).invalidMonth = e;
});
var cv = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ko = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), wo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, dv = qn, fv = qn;
function vv(e, t) {
  return e ? at(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || wo).test(t) ? "format" : "standalone"][e.month()] : at(this._months) ? this._months : this._months.standalone;
}
function mv(e, t) {
  return e ? at(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[wo.test(t) ? "format" : "standalone"][e.month()] : at(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function hv(e, t, n) {
  var a, r, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      i = mt([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (r = pe.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = pe.call(this._longMonthsParse, s), r !== -1 ? r : null) : t === "MMM" ? (r = pe.call(this._shortMonthsParse, s), r !== -1 ? r : (r = pe.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = pe.call(this._longMonthsParse, s), r !== -1 ? r : (r = pe.call(this._shortMonthsParse, s), r !== -1 ? r : null));
}
function gv(e, t, n) {
  var a, r, i;
  if (this._monthsParseExact)
    return hv.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (r = mt([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[a] && (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (n && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!n && this._monthsParse[a].test(e))
      return a;
  }
}
function Co(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = X(t);
    else if (t = e.localeData().monthsParse(t), !Pt(t))
      return e;
  }
  var n = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, pi(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a), e;
}
function Po(e) {
  return e != null ? (Co(this, e), S.updateOffset(this, !0), this) : Yn(this, "Month");
}
function yv() {
  return pi(this.year(), this.month());
}
function _v(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || xo.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ae(this, "_monthsShortRegex") || (this._monthsShortRegex = dv), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function pv(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || xo.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ae(this, "_monthsRegex") || (this._monthsRegex = fv), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function xo() {
  function e(u, c) {
    return c.length - u.length;
  }
  var t = [], n = [], a = [], r, i, s, l;
  for (r = 0; r < 12; r++)
    i = mt([2e3, r]), s = bt(this.monthsShort(i, "")), l = bt(this.months(i, "")), t.push(s), n.push(l), a.push(l), a.push(s);
  t.sort(e), n.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Sv(e, t, n, a, r, i, s) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, a, r, i, s), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, a, r, i, s), l;
}
function Ln(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ka(e, t, n) {
  var a = 7 + t - n, r = (7 + Ln(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function To(e, t, n, a, r) {
  var i = (7 + n - a) % 7, s = ka(e, a, r), l = 1 + 7 * (t - 1) + i + s, u, c;
  return l <= 0 ? (u = e - 1, c = On(u) + l) : l > On(e) ? (u = e + 1, c = l - On(e)) : (u = e, c = l), {
    year: u,
    dayOfYear: c
  };
}
function Nn(e, t, n) {
  var a = ka(e.year(), t, n), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, i, s;
  return r < 1 ? (s = e.year() - 1, i = r + kt(s, t, n)) : r > kt(e.year(), t, n) ? (i = r - kt(e.year(), t, n), s = e.year() + 1) : (s = e.year(), i = r), {
    week: i,
    year: s
  };
}
function kt(e, t, n) {
  var a = ka(e, t, n), r = ka(e + 1, t, n);
  return (On(e) - a + r) / 7;
}
B("w", ["ww", 2], "wo", "week");
B("W", ["WW", 2], "Wo", "isoWeek");
R("w", ve, _n);
R("ww", ve, je);
R("W", ve, _n);
R("WW", ve, je);
Zn(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = X(e);
  }
);
function bv(e) {
  return Nn(e, this._week.dow, this._week.doy).week;
}
var kv = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function wv() {
  return this._week.dow;
}
function Cv() {
  return this._week.doy;
}
function Pv(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function xv(e) {
  var t = Nn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
B("d", 0, "do", "day");
B("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
B("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
B("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
B("e", 0, 0, "weekday");
B("E", 0, 0, "isoWeekday");
R("d", ve);
R("e", ve);
R("E", ve);
R("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
R("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
R("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Zn(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var r = n._locale.weekdaysParse(e, a, n._strict);
  r != null ? t.d = r : G(n).invalidWeekday = e;
});
Zn(["d", "e", "E"], function(e, t, n, a) {
  t[a] = X(e);
});
function Tv(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Mv(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Si(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Dv = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Mo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ov = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ev = qn, Av = qn, Iv = qn;
function Vv(e, t) {
  var n = at(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Si(n, this._week.dow) : e ? n[e.day()] : n;
}
function Rv(e) {
  return e === !0 ? Si(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Yv(e) {
  return e === !0 ? Si(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Lv(e, t, n) {
  var a, r, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      i = mt([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (r = pe.call(this._weekdaysParse, s), r !== -1 ? r : null) : t === "ddd" ? (r = pe.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = pe.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : t === "dddd" ? (r = pe.call(this._weekdaysParse, s), r !== -1 || (r = pe.call(this._shortWeekdaysParse, s), r !== -1) ? r : (r = pe.call(this._minWeekdaysParse, s), r !== -1 ? r : null)) : t === "ddd" ? (r = pe.call(this._shortWeekdaysParse, s), r !== -1 || (r = pe.call(this._weekdaysParse, s), r !== -1) ? r : (r = pe.call(this._minWeekdaysParse, s), r !== -1 ? r : null)) : (r = pe.call(this._minWeekdaysParse, s), r !== -1 || (r = pe.call(this._weekdaysParse, s), r !== -1) ? r : (r = pe.call(this._shortWeekdaysParse, s), r !== -1 ? r : null));
}
function Nv(e, t, n) {
  var a, r, i;
  if (this._weekdaysParseExact)
    return Lv.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (r = mt([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (n && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!n && this._weekdaysParse[a].test(e))
      return a;
  }
}
function Fv(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Yn(this, "Day");
  return e != null ? (e = Tv(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Bv(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function $v(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Mv(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Wv(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || bi.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ae(this, "_weekdaysRegex") || (this._weekdaysRegex = Ev), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Uv(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || bi.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ae(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Av), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Hv(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || bi.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ae(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Iv), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function bi() {
  function e(d, g) {
    return g.length - d.length;
  }
  var t = [], n = [], a = [], r = [], i, s, l, u, c;
  for (i = 0; i < 7; i++)
    s = mt([2e3, 1]).day(i), l = bt(this.weekdaysMin(s, "")), u = bt(this.weekdaysShort(s, "")), c = bt(this.weekdays(s, "")), t.push(l), n.push(u), a.push(c), r.push(l), r.push(u), r.push(c);
  t.sort(e), n.sort(e), a.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ki() {
  return this.hours() % 12 || 12;
}
function jv() {
  return this.hours() || 24;
}
B("H", ["HH", 2], 0, "hour");
B("h", ["hh", 2], 0, ki);
B("k", ["kk", 2], 0, jv);
B("hmm", 0, 0, function() {
  return "" + ki.apply(this) + ut(this.minutes(), 2);
});
B("hmmss", 0, 0, function() {
  return "" + ki.apply(this) + ut(this.minutes(), 2) + ut(this.seconds(), 2);
});
B("Hmm", 0, 0, function() {
  return "" + this.hours() + ut(this.minutes(), 2);
});
B("Hmmss", 0, 0, function() {
  return "" + this.hours() + ut(this.minutes(), 2) + ut(this.seconds(), 2);
});
function Do(e, t) {
  B(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Do("a", !0);
Do("A", !1);
function Oo(e, t) {
  return t._meridiemParse;
}
R("a", Oo);
R("A", Oo);
R("H", ve, _i);
R("h", ve, _n);
R("k", ve, _n);
R("HH", ve, je);
R("hh", ve, je);
R("kk", ve, je);
R("hmm", _o);
R("hmmss", po);
R("Hmm", _o);
R("Hmmss", po);
se(["H", "HH"], ke);
se(["k", "kk"], function(e, t, n) {
  var a = X(e);
  t[ke] = a === 24 ? 0 : a;
});
se(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
se(["h", "hh"], function(e, t, n) {
  t[ke] = X(e), G(n).bigHour = !0;
});
se("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[et] = X(e.substr(a)), G(n).bigHour = !0;
});
se("hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[et] = X(e.substr(a, 2)), t[St] = X(e.substr(r)), G(n).bigHour = !0;
});
se("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[et] = X(e.substr(a));
});
se("Hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[et] = X(e.substr(a, 2)), t[St] = X(e.substr(r));
});
function zv(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Gv = /[ap]\.?m?\.?/i, Kv = pn("Hours", !0);
function qv(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Eo = {
  calendar: Lf,
  longDateFormat: $f,
  invalidDate: Uf,
  ordinal: jf,
  dayOfMonthOrdinalParse: zf,
  relativeTime: Kf,
  months: cv,
  monthsShort: ko,
  week: kv,
  weekdays: Dv,
  weekdaysMin: Ov,
  weekdaysShort: Mo,
  meridiemParse: Gv
}, me = {}, Cn = {}, Fn;
function Zv(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function Ts(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Xv(e) {
  for (var t = 0, n, a, r, i; t < e.length; ) {
    for (i = Ts(e[t]).split("-"), n = i.length, a = Ts(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (r = Ka(i.slice(0, n).join("-")), r)
        return r;
      if (a && a.length >= n && Zv(i, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Fn;
}
function Jv(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ka(e) {
  var t = null, n;
  if (me[e] === void 0 && typeof module < "u" && module && module.exports && Jv(e))
    try {
      t = Fn._abbr, n = require, n("./locale/" + e), Vt(t);
    } catch {
      me[e] = null;
    }
  return me[e];
}
function Vt(e, t) {
  var n;
  return e && (Ve(t) ? n = Mt(e) : n = wi(e, t), n ? Fn = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Fn._abbr;
}
function wi(e, t) {
  if (t !== null) {
    var n, a = Eo;
    if (t.abbr = e, me[e] != null)
      mo(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = me[e]._config;
    else if (t.parentLocale != null)
      if (me[t.parentLocale] != null)
        a = me[t.parentLocale]._config;
      else if (n = Ka(t.parentLocale), n != null)
        a = n._config;
      else
        return Cn[t.parentLocale] || (Cn[t.parentLocale] = []), Cn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return me[e] = new vi(Tr(a, t)), Cn[e] && Cn[e].forEach(function(r) {
      wi(r.name, r.config);
    }), Vt(e), me[e];
  } else
    return delete me[e], null;
}
function Qv(e, t) {
  if (t != null) {
    var n, a, r = Eo;
    me[e] != null && me[e].parentLocale != null ? me[e].set(Tr(me[e]._config, t)) : (a = Ka(e), a != null && (r = a._config), t = Tr(r, t), a == null && (t.abbr = e), n = new vi(t), n.parentLocale = me[e], me[e] = n), Vt(e);
  } else
    me[e] != null && (me[e].parentLocale != null ? (me[e] = me[e].parentLocale, e === Vt() && Vt(e)) : me[e] != null && delete me[e]);
  return me[e];
}
function Mt(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Fn;
  if (!at(e)) {
    if (t = Ka(e), t)
      return t;
    e = [e];
  }
  return Xv(e);
}
function em() {
  return Mr(me);
}
function Ci(e) {
  var t, n = e._a;
  return n && G(e).overflow === -2 && (t = n[pt] < 0 || n[pt] > 11 ? pt : n[st] < 1 || n[st] > pi(n[Oe], n[pt]) ? st : n[ke] < 0 || n[ke] > 24 || n[ke] === 24 && (n[et] !== 0 || n[St] !== 0 || n[$t] !== 0) ? ke : n[et] < 0 || n[et] > 59 ? et : n[St] < 0 || n[St] > 59 ? St : n[$t] < 0 || n[$t] > 999 ? $t : -1, G(e)._overflowDayOfYear && (t < Oe || t > st) && (t = st), G(e)._overflowWeeks && t === -1 && (t = rv), G(e)._overflowWeekday && t === -1 && (t = iv), G(e).overflow = t), e;
}
var tm = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, nm = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, am = /Z|[+-]\d\d(?::?\d\d)?/, ta = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], dr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], rm = /^\/?Date\((-?\d+)/i, im = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, sm = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ao(e) {
  var t, n, a = e._i, r = tm.exec(a) || nm.exec(a), i, s, l, u, c = ta.length, d = dr.length;
  if (r) {
    for (G(e).iso = !0, t = 0, n = c; t < n; t++)
      if (ta[t][1].exec(r[1])) {
        s = ta[t][0], i = ta[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, n = d; t < n; t++)
        if (dr[t][1].exec(r[3])) {
          l = (r[2] || " ") + dr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && l != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (am.exec(r[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (l || "") + (u || ""), xi(e);
  } else
    e._isValid = !1;
}
function lm(e, t, n, a, r, i) {
  var s = [
    om(e),
    ko.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function om(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function um(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function cm(e, t, n) {
  if (e) {
    var a = Mo.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return G(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function dm(e, t, n) {
  if (e)
    return sm[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), r = a % 100, i = (a - r) / 100;
  return i * 60 + r;
}
function Io(e) {
  var t = im.exec(um(e._i)), n;
  if (t) {
    if (n = lm(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !cm(t[1], n, e))
      return;
    e._a = n, e._tzm = dm(t[8], t[9], t[10]), e._d = Ln.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), G(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function fm(e) {
  var t = rm.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ao(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Io(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : S.createFromInputFallback(e);
}
S.createFromInputFallback = Xe(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function qt(e, t, n) {
  return e ?? t ?? n;
}
function vm(e) {
  var t = new Date(S.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Pi(e) {
  var t, n, a = [], r, i, s;
  if (!e._d) {
    for (r = vm(e), e._w && e._a[st] == null && e._a[pt] == null && mm(e), e._dayOfYear != null && (s = qt(e._a[Oe], r[Oe]), (e._dayOfYear > On(s) || e._dayOfYear === 0) && (G(e)._overflowDayOfYear = !0), n = Ln(s, 0, e._dayOfYear), e._a[pt] = n.getUTCMonth(), e._a[st] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[ke] === 24 && e._a[et] === 0 && e._a[St] === 0 && e._a[$t] === 0 && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? Ln : Sv).apply(
      null,
      a
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (G(e).weekdayMismatch = !0);
  }
}
function mm(e) {
  var t, n, a, r, i, s, l, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, n = qt(
    t.GG,
    e._a[Oe],
    Nn(fe(), 1, 4).year
  ), a = qt(t.W, 1), r = qt(t.E, 1), (r < 1 || r > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, c = Nn(fe(), i, s), n = qt(t.gg, e._a[Oe], c.year), a = qt(t.w, c.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (u = !0)) : t.e != null ? (r = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : r = i), a < 1 || a > kt(n, i, s) ? G(e)._overflowWeeks = !0 : u != null ? G(e)._overflowWeekday = !0 : (l = To(n, a, r, i, s), e._a[Oe] = l.year, e._dayOfYear = l.dayOfYear);
}
S.ISO_8601 = function() {
};
S.RFC_2822 = function() {
};
function xi(e) {
  if (e._f === S.ISO_8601) {
    Ao(e);
    return;
  }
  if (e._f === S.RFC_2822) {
    Io(e);
    return;
  }
  e._a = [], G(e).empty = !0;
  var t = "" + e._i, n, a, r, i, s, l = t.length, u = 0, c, d;
  for (r = ho(e._f, e._locale).match(mi) || [], d = r.length, n = 0; n < d; n++)
    i = r[n], a = (t.match(tv(i, e)) || [])[0], a && (s = t.substr(0, t.indexOf(a)), s.length > 0 && G(e).unusedInput.push(s), t = t.slice(
      t.indexOf(a) + a.length
    ), u += a.length), tn[i] ? (a ? G(e).empty = !1 : G(e).unusedTokens.push(i), av(i, a, e)) : e._strict && !a && G(e).unusedTokens.push(i);
  G(e).charsLeftOver = l - u, t.length > 0 && G(e).unusedInput.push(t), e._a[ke] <= 12 && G(e).bigHour === !0 && e._a[ke] > 0 && (G(e).bigHour = void 0), G(e).parsedDateParts = e._a.slice(0), G(e).meridiem = e._meridiem, e._a[ke] = hm(
    e._locale,
    e._a[ke],
    e._meridiem
  ), c = G(e).era, c !== null && (e._a[Oe] = e._locale.erasConvertYear(c, e._a[Oe])), Pi(e), Ci(e);
}
function hm(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function gm(e) {
  var t, n, a, r, i, s, l = !1, u = e._f.length;
  if (u === 0) {
    G(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < u; r++)
    i = 0, s = !1, t = fi({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], xi(t), di(t) && (s = !0), i += G(t).charsLeftOver, i += G(t).unusedTokens.length * 10, G(t).score = i, l ? i < a && (a = i, n = t) : (a == null || i < a || s) && (a = i, n = t, s && (l = !0));
  At(e, n || t);
}
function ym(e) {
  if (!e._d) {
    var t = hi(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = fo(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), Pi(e);
  }
}
function _m(e) {
  var t = new Kn(Ci(Vo(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Vo(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Mt(e._l), t === null || n === void 0 && t === "" ? $a({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), rt(t) ? new Kn(Ci(t)) : (Gn(t) ? e._d = t : at(n) ? gm(e) : n ? xi(e) : pm(e), di(e) || (e._d = null), e));
}
function pm(e) {
  var t = e._i;
  Ve(t) ? e._d = new Date(S.now()) : Gn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? fm(e) : at(t) ? (e._a = fo(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Pi(e)) : Ht(t) ? ym(e) : Pt(t) ? e._d = new Date(t) : S.createFromInputFallback(e);
}
function Ro(e, t, n, a, r) {
  var i = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (Ht(e) && ci(e) || at(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = n, i._i = e, i._f = t, i._strict = a, _m(i);
}
function fe(e, t, n, a) {
  return Ro(e, t, n, a, !1);
}
var Sm = Xe(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = fe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : $a();
  }
), bm = Xe(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = fe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : $a();
  }
);
function Yo(e, t) {
  var n, a;
  if (t.length === 1 && at(t[0]) && (t = t[0]), !t.length)
    return fe();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function km() {
  var e = [].slice.call(arguments, 0);
  return Yo("isBefore", e);
}
function wm() {
  var e = [].slice.call(arguments, 0);
  return Yo("isAfter", e);
}
var Cm = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Pn = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Pm(e) {
  var t, n = !1, a, r = Pn.length;
  for (t in e)
    if (ae(e, t) && !(pe.call(Pn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[Pn[a]]) {
      if (n)
        return !1;
      parseFloat(e[Pn[a]]) !== X(e[Pn[a]]) && (n = !0);
    }
  return !0;
}
function xm() {
  return this._isValid;
}
function Tm() {
  return it(NaN);
}
function qa(e) {
  var t = hi(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, l = t.hour || 0, u = t.minute || 0, c = t.second || 0, d = t.millisecond || 0;
  this._isValid = Pm(t), this._milliseconds = +d + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +r + a * 3 + n * 12, this._data = {}, this._locale = Mt(), this._bubble();
}
function sa(e) {
  return e instanceof qa;
}
function Or(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Mm(e, t, n) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < a; s++)
    X(e[s]) !== X(t[s]) && i++;
  return i + r;
}
function Lo(e, t) {
  B(e, 0, 0, function() {
    var n = this.utcOffset(), a = "+";
    return n < 0 && (n = -n, a = "-"), a + ut(~~(n / 60), 2) + t + ut(~~n % 60, 2);
  });
}
Lo("Z", ":");
Lo("ZZ", "");
R("Z", za);
R("ZZ", za);
se(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Ti(za, e);
});
var Dm = /([\+\-]|\d\d)/gi;
function Ti(e, t) {
  var n = (t || "").match(e), a, r, i;
  return n === null ? null : (a = n[n.length - 1] || [], r = (a + "").match(Dm) || ["-", 0, 0], i = +(r[1] * 60) + X(r[2]), i === 0 ? 0 : r[0] === "+" ? i : -i);
}
function Mi(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (rt(e) || Gn(e) ? e.valueOf() : fe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), S.updateOffset(n, !1), n) : fe(e).local();
}
function Er(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
S.updateOffset = function() {
};
function Om(e, t, n) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ti(za, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (r = Er(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Bo(
      this,
      it(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, S.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : Er(this);
}
function Em(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Am(e) {
  return this.utcOffset(0, e);
}
function Im(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Er(this), "m")), this;
}
function Vm() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ti(Qf, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Rm(e) {
  return this.isValid() ? (e = e ? fe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ym() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Lm() {
  if (!Ve(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return fi(e, this), e = Vo(e), e._a ? (t = e._isUTC ? mt(e._a) : fe(e._a), this._isDSTShifted = this.isValid() && Mm(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Nm() {
  return this.isValid() ? !this._isUTC : !1;
}
function Fm() {
  return this.isValid() ? this._isUTC : !1;
}
function No() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Bm = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, $m = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function it(e, t) {
  var n = e, a = null, r, i, s;
  return sa(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Pt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Bm.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: X(a[st]) * r,
    h: X(a[ke]) * r,
    m: X(a[et]) * r,
    s: X(a[St]) * r,
    ms: X(Or(a[$t] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = $m.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: Bt(a[2], r),
    M: Bt(a[3], r),
    w: Bt(a[4], r),
    d: Bt(a[5], r),
    h: Bt(a[6], r),
    m: Bt(a[7], r),
    s: Bt(a[8], r)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = Wm(
    fe(n.from),
    fe(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), i = new qa(n), sa(e) && ae(e, "_locale") && (i._locale = e._locale), sa(e) && ae(e, "_isValid") && (i._isValid = e._isValid), i;
}
it.fn = qa.prototype;
it.invalid = Tm;
function Bt(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Ms(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Wm(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Mi(t, e), e.isBefore(t) ? n = Ms(e, t) : (n = Ms(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Fo(e, t) {
  return function(n, a) {
    var r, i;
    return a !== null && !isNaN(+a) && (mo(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = a, a = i), r = it(n, a), Bo(this, r, e), this;
  };
}
function Bo(e, t, n, a) {
  var r = t._milliseconds, i = Or(t._days), s = Or(t._months);
  e.isValid() && (a = a ?? !0, s && Co(e, Yn(e, "Month") + s * n), i && bo(e, "Date", Yn(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), a && S.updateOffset(e, i || s));
}
var Um = Fo(1, "add"), Hm = Fo(-1, "subtract");
function $o(e) {
  return typeof e == "string" || e instanceof String;
}
function jm(e) {
  return rt(e) || Gn(e) || $o(e) || Pt(e) || Gm(e) || zm(e) || e === null || e === void 0;
}
function zm(e) {
  var t = Ht(e) && !ci(e), n = !1, a = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, i, s = a.length;
  for (r = 0; r < s; r += 1)
    i = a[r], n = n || ae(e, i);
  return t && n;
}
function Gm(e) {
  var t = at(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !Pt(a) && $o(e);
  }).length === 0), t && n;
}
function Km(e) {
  var t = Ht(e) && !ci(e), n = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, i;
  for (r = 0; r < a.length; r += 1)
    i = a[r], n = n || ae(e, i);
  return t && n;
}
function qm(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Zm(e, t) {
  arguments.length === 1 && (arguments[0] ? jm(arguments[0]) ? (e = arguments[0], t = void 0) : Km(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || fe(), a = Mi(n, this).startOf("day"), r = S.calendarFormat(this, a) || "sameElse", i = t && (ht(t[r]) ? t[r].call(this, n) : t[r]);
  return this.format(
    i || this.localeData().calendar(r, this, fe(n))
  );
}
function Xm() {
  return new Kn(this);
}
function Jm(e, t) {
  var n = rt(e) ? e : fe(e);
  return this.isValid() && n.isValid() ? (t = Je(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Qm(e, t) {
  var n = rt(e) ? e : fe(e);
  return this.isValid() && n.isValid() ? (t = Je(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function eh(e, t, n, a) {
  var r = rt(e) ? e : fe(e), i = rt(t) ? t : fe(t);
  return this.isValid() && r.isValid() && i.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (a[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function th(e, t) {
  var n = rt(e) ? e : fe(e), a;
  return this.isValid() && n.isValid() ? (t = Je(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function nh(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ah(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function rh(e, t, n) {
  var a, r, i;
  if (!this.isValid())
    return NaN;
  if (a = Mi(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = Je(t), t) {
    case "year":
      i = la(this, a) / 12;
      break;
    case "month":
      i = la(this, a);
      break;
    case "quarter":
      i = la(this, a) / 3;
      break;
    case "second":
      i = (this - a) / 1e3;
      break;
    case "minute":
      i = (this - a) / 6e4;
      break;
    case "hour":
      i = (this - a) / 36e5;
      break;
    case "day":
      i = (this - a - r) / 864e5;
      break;
    case "week":
      i = (this - a - r) / 6048e5;
      break;
    default:
      i = this - a;
  }
  return n ? i : Ge(i);
}
function la(e, t) {
  if (e.date() < t.date())
    return -la(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), r, i;
  return t - a < 0 ? (r = e.clone().add(n - 1, "months"), i = (t - a) / (a - r)) : (r = e.clone().add(n + 1, "months"), i = (t - a) / (r - a)), -(n + i) || 0;
}
S.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
S.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ih() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function sh(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? ia(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ht(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ia(n, "Z")) : ia(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function lh() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, r, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + a + r + i);
}
function oh(e) {
  e || (e = this.isUtc() ? S.defaultFormatUtc : S.defaultFormat);
  var t = ia(this, e);
  return this.localeData().postformat(t);
}
function uh(e, t) {
  return this.isValid() && (rt(e) && e.isValid() || fe(e).isValid()) ? it({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ch(e) {
  return this.from(fe(), e);
}
function dh(e, t) {
  return this.isValid() && (rt(e) && e.isValid() || fe(e).isValid()) ? it({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function fh(e) {
  return this.to(fe(), e);
}
function Wo(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Mt(e), t != null && (this._locale = t), this);
}
var Uo = Xe(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ho() {
  return this._locale;
}
var wa = 1e3, nn = 60 * wa, Ca = 60 * nn, jo = (365 * 400 + 97) * 24 * Ca;
function an(e, t) {
  return (e % t + t) % t;
}
function zo(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - jo : new Date(e, t, n).valueOf();
}
function Go(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - jo : Date.UTC(e, t, n);
}
function vh(e) {
  var t, n;
  if (e = Je(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Go : zo, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= an(
        t + (this._isUTC ? 0 : this.utcOffset() * nn),
        Ca
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= an(t, nn);
      break;
    case "second":
      t = this._d.valueOf(), t -= an(t, wa);
      break;
  }
  return this._d.setTime(t), S.updateOffset(this, !0), this;
}
function mh(e) {
  var t, n;
  if (e = Je(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Go : zo, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ca - an(
        t + (this._isUTC ? 0 : this.utcOffset() * nn),
        Ca
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += nn - an(t, nn) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += wa - an(t, wa) - 1;
      break;
  }
  return this._d.setTime(t), S.updateOffset(this, !0), this;
}
function hh() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function gh() {
  return Math.floor(this.valueOf() / 1e3);
}
function yh() {
  return new Date(this.valueOf());
}
function _h() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function ph() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Sh() {
  return this.isValid() ? this.toISOString() : null;
}
function bh() {
  return di(this);
}
function kh() {
  return At({}, G(this));
}
function wh() {
  return G(this).overflow;
}
function Ch() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
B("N", 0, 0, "eraAbbr");
B("NN", 0, 0, "eraAbbr");
B("NNN", 0, 0, "eraAbbr");
B("NNNN", 0, 0, "eraName");
B("NNNNN", 0, 0, "eraNarrow");
B("y", ["y", 1], "yo", "eraYear");
B("y", ["yy", 2], 0, "eraYear");
B("y", ["yyy", 3], 0, "eraYear");
B("y", ["yyyy", 4], 0, "eraYear");
R("N", Di);
R("NN", Di);
R("NNN", Di);
R("NNNN", Rh);
R("NNNNN", Yh);
se(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var r = n._locale.erasParse(e, a, n._strict);
    r ? G(n).era = r : G(n).invalidEra = e;
  }
);
R("y", yn);
R("yy", yn);
R("yyy", yn);
R("yyyy", yn);
R("yo", Lh);
se(["y", "yy", "yyy", "yyyy"], Oe);
se(["yo"], function(e, t, n, a) {
  var r;
  n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Oe] = n._locale.eraYearOrdinalParse(e, r) : t[Oe] = parseInt(e, 10);
});
function Ph(e, t) {
  var n, a, r, i = this._eras || Mt("en")._eras;
  for (n = 0, a = i.length; n < a; ++n) {
    switch (typeof i[n].since) {
      case "string":
        r = S(i[n].since).startOf("day"), i[n].since = r.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        r = S(i[n].until).startOf("day").valueOf(), i[n].until = r.valueOf();
        break;
    }
  }
  return i;
}
function xh(e, t, n) {
  var a, r, i = this.eras(), s, l, u;
  for (e = e.toUpperCase(), a = 0, r = i.length; a < r; ++a)
    if (s = i[a].name.toUpperCase(), l = i[a].abbr.toUpperCase(), u = i[a].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return i[a];
          break;
        case "NNNN":
          if (s === e)
            return i[a];
          break;
        case "NNNNN":
          if (u === e)
            return i[a];
          break;
      }
    else if ([s, l, u].indexOf(e) >= 0)
      return i[a];
}
function Th(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? S(e.since).year() : S(e.since).year() + (t - e.offset) * n;
}
function Mh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function Dh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function Oh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function Eh() {
  var e, t, n, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - S(r[e].since).year()) * n + r[e].offset;
  return this.year();
}
function Ah(e) {
  return ae(this, "_erasNameRegex") || Oi.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ih(e) {
  return ae(this, "_erasAbbrRegex") || Oi.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Vh(e) {
  return ae(this, "_erasNarrowRegex") || Oi.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Di(e, t) {
  return t.erasAbbrRegex(e);
}
function Rh(e, t) {
  return t.erasNameRegex(e);
}
function Yh(e, t) {
  return t.erasNarrowRegex(e);
}
function Lh(e, t) {
  return t._eraYearOrdinalRegex || yn;
}
function Oi() {
  var e = [], t = [], n = [], a = [], r, i, s, l, u, c = this.eras();
  for (r = 0, i = c.length; r < i; ++r)
    s = bt(c[r].name), l = bt(c[r].abbr), u = bt(c[r].narrow), t.push(s), e.push(l), n.push(u), a.push(s), a.push(l), a.push(u);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
B(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
B(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Za(e, t) {
  B(0, [e, e.length], 0, t);
}
Za("gggg", "weekYear");
Za("ggggg", "weekYear");
Za("GGGG", "isoWeekYear");
Za("GGGGG", "isoWeekYear");
R("G", ja);
R("g", ja);
R("GG", ve, je);
R("gg", ve, je);
R("GGGG", yi, gi);
R("gggg", yi, gi);
R("GGGGG", Ha, Wa);
R("ggggg", Ha, Wa);
Zn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = X(e);
  }
);
Zn(["gg", "GG"], function(e, t, n, a) {
  t[a] = S.parseTwoDigitYear(e);
});
function Nh(e) {
  return Ko.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Fh(e) {
  return Ko.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Bh() {
  return kt(this.year(), 1, 4);
}
function $h() {
  return kt(this.isoWeekYear(), 1, 4);
}
function Wh() {
  var e = this.localeData()._week;
  return kt(this.year(), e.dow, e.doy);
}
function Uh() {
  var e = this.localeData()._week;
  return kt(this.weekYear(), e.dow, e.doy);
}
function Ko(e, t, n, a, r) {
  var i;
  return e == null ? Nn(this, a, r).year : (i = kt(e, a, r), t > i && (t = i), Hh.call(this, e, t, n, a, r));
}
function Hh(e, t, n, a, r) {
  var i = To(e, t, n, a, r), s = Ln(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
B("Q", 0, "Qo", "quarter");
R("Q", go);
se("Q", function(e, t) {
  t[pt] = (X(e) - 1) * 3;
});
function jh(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
B("D", ["DD", 2], "Do", "date");
R("D", ve, _n);
R("DD", ve, je);
R("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
se(["D", "DD"], st);
se("Do", function(e, t) {
  t[st] = X(e.match(ve)[0]);
});
var qo = pn("Date", !0);
B("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
R("DDD", Ua);
R("DDDD", yo);
se(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = X(e);
});
function zh(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
B("m", ["mm", 2], 0, "minute");
R("m", ve, _i);
R("mm", ve, je);
se(["m", "mm"], et);
var Gh = pn("Minutes", !1);
B("s", ["ss", 2], 0, "second");
R("s", ve, _i);
R("ss", ve, je);
se(["s", "ss"], St);
var Kh = pn("Seconds", !1);
B("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
B(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
B(0, ["SSS", 3], 0, "millisecond");
B(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
B(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
B(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
B(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
B(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
B(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
R("S", Ua, go);
R("SS", Ua, je);
R("SSS", Ua, yo);
var It, Zo;
for (It = "SSSS"; It.length <= 9; It += "S")
  R(It, yn);
function qh(e, t) {
  t[$t] = X(("0." + e) * 1e3);
}
for (It = "S"; It.length <= 9; It += "S")
  se(It, qh);
Zo = pn("Milliseconds", !1);
B("z", 0, 0, "zoneAbbr");
B("zz", 0, 0, "zoneName");
function Zh() {
  return this._isUTC ? "UTC" : "";
}
function Xh() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var T = Kn.prototype;
T.add = Um;
T.calendar = Zm;
T.clone = Xm;
T.diff = rh;
T.endOf = mh;
T.format = oh;
T.from = uh;
T.fromNow = ch;
T.to = dh;
T.toNow = fh;
T.get = lv;
T.invalidAt = wh;
T.isAfter = Jm;
T.isBefore = Qm;
T.isBetween = eh;
T.isSame = th;
T.isSameOrAfter = nh;
T.isSameOrBefore = ah;
T.isValid = bh;
T.lang = Uo;
T.locale = Wo;
T.localeData = Ho;
T.max = bm;
T.min = Sm;
T.parsingFlags = kh;
T.set = ov;
T.startOf = vh;
T.subtract = Hm;
T.toArray = _h;
T.toObject = ph;
T.toDate = yh;
T.toISOString = sh;
T.inspect = lh;
typeof Symbol < "u" && Symbol.for != null && (T[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
T.toJSON = Sh;
T.toString = ih;
T.unix = gh;
T.valueOf = hh;
T.creationData = Ch;
T.eraName = Mh;
T.eraNarrow = Dh;
T.eraAbbr = Oh;
T.eraYear = Eh;
T.year = So;
T.isLeapYear = sv;
T.weekYear = Nh;
T.isoWeekYear = Fh;
T.quarter = T.quarters = jh;
T.month = Po;
T.daysInMonth = yv;
T.week = T.weeks = Pv;
T.isoWeek = T.isoWeeks = xv;
T.weeksInYear = Wh;
T.weeksInWeekYear = Uh;
T.isoWeeksInYear = Bh;
T.isoWeeksInISOWeekYear = $h;
T.date = qo;
T.day = T.days = Fv;
T.weekday = Bv;
T.isoWeekday = $v;
T.dayOfYear = zh;
T.hour = T.hours = Kv;
T.minute = T.minutes = Gh;
T.second = T.seconds = Kh;
T.millisecond = T.milliseconds = Zo;
T.utcOffset = Om;
T.utc = Am;
T.local = Im;
T.parseZone = Vm;
T.hasAlignedHourOffset = Rm;
T.isDST = Ym;
T.isLocal = Nm;
T.isUtcOffset = Fm;
T.isUtc = No;
T.isUTC = No;
T.zoneAbbr = Zh;
T.zoneName = Xh;
T.dates = Xe(
  "dates accessor is deprecated. Use date instead.",
  qo
);
T.months = Xe(
  "months accessor is deprecated. Use month instead",
  Po
);
T.years = Xe(
  "years accessor is deprecated. Use year instead",
  So
);
T.zone = Xe(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Em
);
T.isDSTShifted = Xe(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Lm
);
function Jh(e) {
  return fe(e * 1e3);
}
function Qh() {
  return fe.apply(null, arguments).parseZone();
}
function Xo(e) {
  return e;
}
var re = vi.prototype;
re.calendar = Nf;
re.longDateFormat = Wf;
re.invalidDate = Hf;
re.ordinal = Gf;
re.preparse = Xo;
re.postformat = Xo;
re.relativeTime = qf;
re.pastFuture = Zf;
re.set = Yf;
re.eras = Ph;
re.erasParse = xh;
re.erasConvertYear = Th;
re.erasAbbrRegex = Ih;
re.erasNameRegex = Ah;
re.erasNarrowRegex = Vh;
re.months = vv;
re.monthsShort = mv;
re.monthsParse = gv;
re.monthsRegex = pv;
re.monthsShortRegex = _v;
re.week = bv;
re.firstDayOfYear = Cv;
re.firstDayOfWeek = wv;
re.weekdays = Vv;
re.weekdaysMin = Yv;
re.weekdaysShort = Rv;
re.weekdaysParse = Nv;
re.weekdaysRegex = Wv;
re.weekdaysShortRegex = Uv;
re.weekdaysMinRegex = Hv;
re.isPM = zv;
re.meridiem = qv;
function Pa(e, t, n, a) {
  var r = Mt(), i = mt().set(a, t);
  return r[n](i, e);
}
function Jo(e, t, n) {
  if (Pt(e) && (t = e, e = void 0), e = e || "", t != null)
    return Pa(e, t, n, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = Pa(e, a, n, "month");
  return r;
}
function Ei(e, t, n, a) {
  typeof e == "boolean" ? (Pt(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Pt(t) && (n = t, t = void 0), t = t || "");
  var r = Mt(), i = e ? r._week.dow : 0, s, l = [];
  if (n != null)
    return Pa(t, (n + i) % 7, a, "day");
  for (s = 0; s < 7; s++)
    l[s] = Pa(t, (s + i) % 7, a, "day");
  return l;
}
function eg(e, t) {
  return Jo(e, t, "months");
}
function tg(e, t) {
  return Jo(e, t, "monthsShort");
}
function ng(e, t, n) {
  return Ei(e, t, n, "weekdays");
}
function ag(e, t, n) {
  return Ei(e, t, n, "weekdaysShort");
}
function rg(e, t, n) {
  return Ei(e, t, n, "weekdaysMin");
}
Vt("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = X(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
S.lang = Xe(
  "moment.lang is deprecated. Use moment.locale instead.",
  Vt
);
S.langData = Xe(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Mt
);
var gt = Math.abs;
function ig() {
  var e = this._data;
  return this._milliseconds = gt(this._milliseconds), this._days = gt(this._days), this._months = gt(this._months), e.milliseconds = gt(e.milliseconds), e.seconds = gt(e.seconds), e.minutes = gt(e.minutes), e.hours = gt(e.hours), e.months = gt(e.months), e.years = gt(e.years), this;
}
function Qo(e, t, n, a) {
  var r = it(t, n);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function sg(e, t) {
  return Qo(this, e, t, 1);
}
function lg(e, t) {
  return Qo(this, e, t, -1);
}
function Ds(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function og() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, r, i, s, l, u;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Ds(Ar(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, r = Ge(e / 1e3), a.seconds = r % 60, i = Ge(r / 60), a.minutes = i % 60, s = Ge(i / 60), a.hours = s % 24, t += Ge(s / 24), u = Ge(eu(t)), n += u, t -= Ds(Ar(u)), l = Ge(n / 12), n %= 12, a.days = t, a.months = n, a.years = l, this;
}
function eu(e) {
  return e * 4800 / 146097;
}
function Ar(e) {
  return e * 146097 / 4800;
}
function ug(e) {
  if (!this.isValid())
    return NaN;
  var t, n, a = this._milliseconds;
  if (e = Je(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, n = this._months + eu(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ar(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Dt(e) {
  return function() {
    return this.as(e);
  };
}
var tu = Dt("ms"), cg = Dt("s"), dg = Dt("m"), fg = Dt("h"), vg = Dt("d"), mg = Dt("w"), hg = Dt("M"), gg = Dt("Q"), yg = Dt("y"), _g = tu;
function pg() {
  return it(this);
}
function Sg(e) {
  return e = Je(e), this.isValid() ? this[e + "s"]() : NaN;
}
function zt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var bg = zt("milliseconds"), kg = zt("seconds"), wg = zt("minutes"), Cg = zt("hours"), Pg = zt("days"), xg = zt("months"), Tg = zt("years");
function Mg() {
  return Ge(this.days() / 7);
}
var _t = Math.round, Jt = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Dg(e, t, n, a, r) {
  return r.relativeTime(t || 1, !!n, e, a);
}
function Og(e, t, n, a) {
  var r = it(e).abs(), i = _t(r.as("s")), s = _t(r.as("m")), l = _t(r.as("h")), u = _t(r.as("d")), c = _t(r.as("M")), d = _t(r.as("w")), g = _t(r.as("y")), h = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || l <= 1 && ["h"] || l < n.h && ["hh", l] || u <= 1 && ["d"] || u < n.d && ["dd", u];
  return n.w != null && (h = h || d <= 1 && ["w"] || d < n.w && ["ww", d]), h = h || c <= 1 && ["M"] || c < n.M && ["MM", c] || g <= 1 && ["y"] || ["yy", g], h[2] = t, h[3] = +e > 0, h[4] = a, Dg.apply(null, h);
}
function Eg(e) {
  return e === void 0 ? _t : typeof e == "function" ? (_t = e, !0) : !1;
}
function Ag(e, t) {
  return Jt[e] === void 0 ? !1 : t === void 0 ? Jt[e] : (Jt[e] = t, e === "s" && (Jt.ss = t - 1), !0);
}
function Ig(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Jt, r, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Jt, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), i = Og(this, !n, a, r), n && (i = r.pastFuture(+this, i)), r.postformat(i);
}
var fr = Math.abs;
function Kt(e) {
  return (e > 0) - (e < 0) || +e;
}
function Xa() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = fr(this._milliseconds) / 1e3, t = fr(this._days), n = fr(this._months), a, r, i, s, l = this.asSeconds(), u, c, d, g;
  return l ? (a = Ge(e / 60), r = Ge(a / 60), e %= 60, a %= 60, i = Ge(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", c = Kt(this._months) !== Kt(l) ? "-" : "", d = Kt(this._days) !== Kt(l) ? "-" : "", g = Kt(this._milliseconds) !== Kt(l) ? "-" : "", u + "P" + (i ? c + i + "Y" : "") + (n ? c + n + "M" : "") + (t ? d + t + "D" : "") + (r || a || e ? "T" : "") + (r ? g + r + "H" : "") + (a ? g + a + "M" : "") + (e ? g + s + "S" : "")) : "P0D";
}
var Q = qa.prototype;
Q.isValid = xm;
Q.abs = ig;
Q.add = sg;
Q.subtract = lg;
Q.as = ug;
Q.asMilliseconds = tu;
Q.asSeconds = cg;
Q.asMinutes = dg;
Q.asHours = fg;
Q.asDays = vg;
Q.asWeeks = mg;
Q.asMonths = hg;
Q.asQuarters = gg;
Q.asYears = yg;
Q.valueOf = _g;
Q._bubble = og;
Q.clone = pg;
Q.get = Sg;
Q.milliseconds = bg;
Q.seconds = kg;
Q.minutes = wg;
Q.hours = Cg;
Q.days = Pg;
Q.weeks = Mg;
Q.months = xg;
Q.years = Tg;
Q.humanize = Ig;
Q.toISOString = Xa;
Q.toString = Xa;
Q.toJSON = Xa;
Q.locale = Wo;
Q.localeData = Ho;
Q.toIsoString = Xe(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Xa
);
Q.lang = Uo;
B("X", 0, 0, "unix");
B("x", 0, 0, "valueOf");
R("x", ja);
R("X", ev);
se("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
se("x", function(e, t, n) {
  n._d = new Date(X(e));
});
//! moment.js
S.version = "2.30.1";
Vf(fe);
S.fn = T;
S.min = km;
S.max = wm;
S.now = Cm;
S.utc = mt;
S.unix = Jh;
S.months = eg;
S.isDate = Gn;
S.locale = Vt;
S.invalid = $a;
S.duration = it;
S.isMoment = rt;
S.weekdays = ng;
S.parseZone = Qh;
S.localeData = Mt;
S.isDuration = sa;
S.monthsShort = tg;
S.weekdaysMin = rg;
S.defineLocale = wi;
S.updateLocale = Qv;
S.locales = em;
S.weekdaysShort = ag;
S.normalizeUnits = Je;
S.relativeTimeRounding = Eg;
S.relativeTimeThreshold = Ag;
S.calendarFormat = qm;
S.prototype = T;
S.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const ge = "YYYY-MM-DD", Vg = "YYYY-MM", Rg = "MMM D, YYYY", xe = String(S().format(ge)), Yg = [
  String(S(xe).subtract(1, "weeks").startOf("isoWeek").format(ge)),
  String(S(xe).subtract(1, "weeks").endOf("isoWeek").format(ge))
], Lg = [
  String(S(xe).subtract(1, "month").startOf("month").format(ge)),
  String(S(xe).subtract(1, "month").endOf("month").format(ge))
], Ng = [
  String(S(xe).subtract(3, "month").startOf("month").format(ge)),
  String(S(xe).subtract(1, "month").endOf("month").format(ge))
], Fg = [
  String(S(xe).subtract(7, "day").format(ge)),
  String(S(xe).subtract(1, "day").format(ge))
], Bg = [
  String(S(xe).subtract(30, "day").format(ge)),
  String(S(xe).subtract(1, "day").format(ge))
], $g = [
  String(S(xe).subtract(90, "day").format(ge)),
  String(S(xe).subtract(1, "day").format(ge))
], Wg = [
  String(S(xe).subtract(1, "year").startOf("Year").format(ge)),
  String(S(xe).subtract(1, "year").endOf("Year").format(ge))
], Ug = [
  String(S(xe).startOf("Year").format(ge)),
  String(S(xe).format(ge))
], Hg = ([e, t]) => {
  const n = S(t).diff(S(e), "days") + 1;
  return [
    String(S(e).subtract(n, "days").format(ge)),
    String(S(t).subtract(n, "days").format(ge))
  ];
}, jg = ([e, t]) => [
  String(S(e).subtract(1, "month").format(ge)),
  String(S(t).subtract(1, "month").format(ge))
], zg = ([e, t]) => [
  String(S(e).subtract(1, "year").format(ge)),
  String(S(t).subtract(1, "year").format(ge))
], Gg = (e, t) => {
  let n = [], a = new Date(e);
  for (; a <= new Date(t); )
    n.push(new Date(a)), a.setDate(a.getDate() + 1);
  return n;
}, Kg = (e) => {
  const t = new Date(e).getFullYear(), n = new Date(e).getMonth();
  return new Date(t, n + 1, 0);
}, Ir = {
  LAST_WEEK: Yg,
  LAST_MONTH: Lg,
  LAST_3_MONTHS: Ng,
  LAST_7_DAYS: Fg,
  LAST_30_DAYS: Bg,
  LAST_90_DAYS: $g,
  LAST_YEAR: Wg,
  THIS_YEAR: Ug
}, Vr = {
  PREVIOUS_PERIOD: Hg,
  PREVIOUS_MONTH: jg,
  PREVIOUS_YEAR: zg
}, L = {
  TODAY: xe,
  DATE_FORMAT: ge,
  MONTH_FORMAT: Vg,
  DEFAULT_FORMAT: Rg,
  ...Ir,
  ...Vr,
  getDatesBetween: Gg,
  getLastDayOfMonth: Kg
}, Ai = {
  __name: "PresetsPrimary",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  setup(e) {
    const n = e.piniaStore, a = f(() => n.getPrimaryPreset);
    return (r, i) => (Z(), ze("div", null, [
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_7_DAYS" ? "primary" : null,
        onClick: i[0] || (i[0] = (s) => I(n).SET_PRIMARY_PRESET("LAST_7_DAYS"))
      }, {
        default: O(() => [
          be(" Last 7 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_30_DAYS" ? "primary" : null,
        onClick: i[1] || (i[1] = (s) => I(n).SET_PRIMARY_PRESET("LAST_30_DAYS"))
      }, {
        default: O(() => [
          be(" Last 30 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_90_DAYS" ? "primary" : null,
        onClick: i[2] || (i[2] = (s) => I(n).SET_PRIMARY_PRESET("LAST_90_DAYS"))
      }, {
        default: O(() => [
          be(" Last 90 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_WEEK" ? "primary" : null,
        onClick: i[3] || (i[3] = (s) => I(n).SET_PRIMARY_PRESET("LAST_WEEK"))
      }, {
        default: O(() => [
          be(" Last week ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_MONTH" ? "primary" : null,
        onClick: i[4] || (i[4] = (s) => I(n).SET_PRIMARY_PRESET("LAST_MONTH"))
      }, {
        default: O(() => [
          be(" Last month ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_3_MONTHS" ? "primary" : null,
        onClick: i[5] || (i[5] = (s) => I(n).SET_PRIMARY_PRESET("LAST_3_MONTHS"))
      }, {
        default: O(() => [
          be(" Last 3 months ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_YEAR" ? "primary" : null,
        onClick: i[6] || (i[6] = (s) => I(n).SET_PRIMARY_PRESET("LAST_YEAR"))
      }, {
        default: O(() => [
          be(" Last Year ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "THIS_YEAR" ? "primary" : null,
        onClick: i[7] || (i[7] = (s) => I(n).SET_PRIMARY_PRESET("THIS_YEAR"))
      }, {
        default: O(() => [
          be(" This Year ")
        ]),
        _: 1
      }, 8, ["color"])
    ]));
  }
}, Ii = {
  __name: "PresetsCompare",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  setup(e) {
    const n = e.piniaStore, a = f(() => n.getCompareState), r = f(() => n.getComparePreset);
    return (i, s) => (Z(), ze("div", null, [
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_PERIOD" ? "primary" : null,
        onClick: s[0] || (s[0] = (l) => I(n).SET_COMPARE_PRESET("PREVIOUS_PERIOD"))
      }, {
        default: O(() => [
          be(" Previous period ")
        ]),
        _: 1
      }, 8, ["disabled", "color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_MONTH" ? "primary" : null,
        onClick: s[1] || (s[1] = (l) => I(n).SET_COMPARE_PRESET("PREVIOUS_MONTH"))
      }, {
        default: O(() => [
          be(" Previous month ")
        ]),
        _: 1
      }, 8, ["disabled", "color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_YEAR" ? "primary" : null,
        onClick: s[2] || (s[2] = (l) => I(n).SET_COMPARE_PRESET("PREVIOUS_YEAR"))
      }, {
        default: O(() => [
          be(" Previous year ")
        ]),
        _: 1
      }, 8, ["disabled", "color"])
    ]));
  }
}, Ja = $()({
  name: "VCardActions",
  props: ee(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return jn({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), z(() => o("div", {
      class: ["v-card-actions", e.class],
      style: e.style
    }, [n.default?.()])), {};
  }
}), qg = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VCardSubtitle"), Zg = $()({
  name: "VCardSubtitle",
  props: qg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Xg = Da("v-card-title"), Jg = A({
  appendAvatar: String,
  appendIcon: ye,
  prependAvatar: String,
  prependIcon: ye,
  subtitle: [String, Number],
  title: [String, Number],
  ...ee(),
  ...Tt()
}, "VCardItem"), Qg = $()({
  name: "VCardItem",
  props: Jg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => {
      const a = !!(e.prependAvatar || e.prependIcon), r = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), s = !!(i || n.append), l = !!(e.title != null || n.title), u = !!(e.subtitle != null || n.subtitle);
      return o("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [r && o("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? o(Pe, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, n.prepend) : o(Ie, null, [e.prependAvatar && o(pa, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && o(ot, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), o("div", {
        class: "v-card-item__content"
      }, [l && o(Xg, {
        key: "title"
      }, {
        default: () => [n.title?.() ?? e.title]
      }), u && o(Zg, {
        key: "subtitle"
      }, {
        default: () => [n.subtitle?.() ?? e.subtitle]
      }), n.default?.()]), s && o("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? o(Pe, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, n.append) : o(Ie, null, [e.appendIcon && o(ot, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && o(pa, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), ey = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VCardText"), Qa = $()({
  name: "VCardText",
  props: ey(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), ty = A({
  appendAvatar: String,
  appendIcon: ye,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...dn(),
  ...ee(),
  ...Tt(),
  ...Lt(),
  ...vn(),
  ...Xr(),
  ...Ra(),
  ...Qr(),
  ...ft(),
  ...ni(),
  ...Ce(),
  ...Ee(),
  ...hn({
    variant: "elevated"
  })
}, "VCard"), ny = $()({
  name: "VCard",
  directives: {
    Ripple: La
  },
  props: ty(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Ye(e), {
      borderClasses: i
    } = fn(e), {
      colorClasses: s,
      colorStyles: l,
      variantClasses: u
    } = Ea(e), {
      densityClasses: c
    } = Yt(e), {
      dimensionStyles: d
    } = Nt(e), {
      elevationClasses: g
    } = mn(e), {
      loaderClasses: h
    } = Jr(e), {
      locationStyles: v
    } = Ya(e), {
      positionClasses: y
    } = ei(e), {
      roundedClasses: m
    } = vt(e), p = ti(e, n), _ = f(() => e.link !== !1 && p.isLink.value), P = f(() => !e.disabled && e.link !== !1 && (e.link || p.isClickable.value));
    return z(() => {
      const M = _.value ? "a" : e.tag, w = !!(a.title || e.title != null), x = !!(a.subtitle || e.subtitle != null), E = w || x, k = !!(a.append || e.appendAvatar || e.appendIcon), F = !!(a.prepend || e.prependAvatar || e.prependIcon), D = !!(a.image || e.image), V = E || F || k, N = !!(a.text || e.text != null);
      return nt(o(M, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": P.value
        }, r.value, i.value, s.value, c.value, g.value, h.value, y.value, m.value, u.value, e.class],
        style: [l.value, d.value, v.value, e.style],
        href: p.href.value,
        onClick: P.value && p.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => [D && o("div", {
          key: "image",
          class: "v-card__image"
        }, [a.image ? o(Pe, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, a.image) : o(eo, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), o(Sl, {
          name: "v-card",
          active: !!e.loading,
          color: typeof e.loading == "boolean" ? void 0 : e.loading
        }, {
          default: a.loader
        }), V && o(Qg, {
          key: "item",
          prependAvatar: e.prependAvatar,
          prependIcon: e.prependIcon,
          title: e.title,
          subtitle: e.subtitle,
          appendAvatar: e.appendAvatar,
          appendIcon: e.appendIcon
        }, {
          default: a.item,
          prepend: a.prepend,
          title: a.title,
          subtitle: a.subtitle,
          append: a.append
        }), N && o(Qa, {
          key: "text"
        }, {
          default: () => [a.text?.() ?? e.text]
        }), a.default?.(), a.actions && o(Ja, null, {
          default: a.actions
        }), Oa(P.value, "v-card")]
      }), [[cn("ripple"), P.value && e.ripple]]);
    }), {};
  }
}), ay = A({
  text: String,
  onClick: Be(),
  ...ee(),
  ...Ee()
}, "VLabel"), nu = $()({
  name: "VLabel",
  props: ay(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o("label", {
      class: ["v-label", {
        "v-label--clickable": !!e.onClick
      }, e.class],
      style: e.style,
      onClick: e.onClick
    }, [e.text, n.default?.()])), {};
  }
}), au = Symbol.for("vuetify:selection-control-group"), ru = A({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ye,
  trueIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: Hn
  },
  ...ee(),
  ...Tt(),
  ...Ee()
}, "SelectionControlGroup"), ry = A({
  ...ru({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
$()({
  name: "VSelectionControlGroup",
  props: ry(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), r = dt(), i = f(() => e.id || `v-selection-control-group-${r}`), s = f(() => e.name || i.value), l = /* @__PURE__ */ new Set();
    return qe(au, {
      modelValue: a,
      forceUpdate: () => {
        l.forEach((u) => u());
      },
      onForceUpdate: (u) => {
        l.add(u), Ze(() => {
          l.delete(u);
        });
      }
    }), jn({
      [e.defaultsTarget]: {
        color: W(e, "color"),
        disabled: W(e, "disabled"),
        density: W(e, "density"),
        error: W(e, "error"),
        inline: W(e, "inline"),
        modelValue: a,
        multiple: f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: s,
        falseIcon: W(e, "falseIcon"),
        trueIcon: W(e, "trueIcon"),
        readonly: W(e, "readonly"),
        ripple: W(e, "ripple"),
        type: W(e, "type"),
        valueComparator: W(e, "valueComparator")
      }
    }), z(() => o("div", {
      class: ["v-selection-control-group", {
        "v-selection-control-group--inline": e.inline
      }, e.class],
      style: e.style,
      role: e.type === "radio" ? "radiogroup" : void 0
    }, [n.default?.()])), {};
  }
});
const iu = A({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ee(),
  ...ru()
}, "VSelectionControl");
function iy(e) {
  const t = Te(au, void 0), {
    densityClasses: n
  } = Yt(e), a = _e(e, "modelValue"), r = f(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = f(() => e.falseValue !== void 0 ? e.falseValue : !1), s = f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), l = f({
    get() {
      const v = t ? t.modelValue.value : a.value;
      return s.value ? Re(v).some((y) => e.valueComparator(y, r.value)) : e.valueComparator(v, r.value);
    },
    set(v) {
      if (e.readonly) return;
      const y = v ? r.value : i.value;
      let m = y;
      s.value && (m = v ? [...Re(a.value), y] : Re(a.value).filter((p) => !e.valueComparator(p, r.value))), t ? t.modelValue.value = m : a.value = m;
    }
  }), {
    textColorClasses: u,
    textColorStyles: c
  } = Ct(f(() => {
    if (!(e.error || e.disabled))
      return l.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: g
  } = tt(f(() => l.value && !e.error && !e.disabled ? e.color : e.baseColor)), h = f(() => l.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: r,
    falseValue: i,
    model: l,
    textColorClasses: u,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: g,
    icon: h
  };
}
const Os = $()({
  name: "VSelectionControl",
  directives: {
    Ripple: La
  },
  inheritAttrs: !1,
  props: iu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: r,
      densityClasses: i,
      icon: s,
      model: l,
      textColorClasses: u,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: g,
      trueValue: h
    } = iy(e), v = dt(), y = ie(!1), m = ie(!1), p = H(), _ = f(() => e.id || `input-${v}`), P = f(() => !e.disabled && !e.readonly);
    r?.onForceUpdate(() => {
      p.value && (p.value.checked = l.value);
    });
    function M(k) {
      P.value && (y.value = !0, ul(k.target, ":focus-visible") !== !1 && (m.value = !0));
    }
    function w() {
      y.value = !1, m.value = !1;
    }
    function x(k) {
      k.stopPropagation();
    }
    function E(k) {
      if (!P.value) {
        p.value && (p.value.checked = l.value);
        return;
      }
      e.readonly && r && We(() => r.forceUpdate()), l.value = k.target.checked;
    }
    return z(() => {
      const k = a.label ? a.label({
        label: e.label,
        props: {
          for: _.value
        }
      }) : e.label, [F, D] = Hr(n), V = o("input", K({
        ref: p,
        checked: l.value,
        disabled: !!e.disabled,
        id: _.value,
        onBlur: w,
        onFocus: M,
        onInput: E,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: h.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? l.value : void 0
      }, D), null);
      return o("div", K({
        class: ["v-selection-control", {
          "v-selection-control--dirty": l.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": m.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, F, {
        style: e.style
      }), [o("div", {
        class: ["v-selection-control__wrapper", u.value],
        style: c.value
      }, [a.default?.({
        backgroundColorClasses: d,
        backgroundColorStyles: g
      }), nt(o("div", {
        class: ["v-selection-control__input"]
      }, [a.input?.({
        model: l,
        textColorClasses: u,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: g,
        inputNode: V,
        icon: s.value,
        props: {
          onFocus: M,
          onBlur: w,
          id: _.value
        }
      }) ?? o(Ie, null, [s.value && o(ot, {
        key: "icon",
        icon: s.value
      }, null), V])]), [[cn("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), k && o(nu, {
        for: _.value,
        onClick: x
      }, {
        default: () => [k]
      })]);
    }), {
      isFocused: y,
      input: p
    };
  }
}), su = A({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ye,
    default: "$checkboxIndeterminate"
  },
  ...iu({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Es = $()({
  name: "VCheckboxBtn",
  props: su(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "indeterminate"), r = _e(e, "modelValue");
    function i(u) {
      a.value && (a.value = !1);
    }
    const s = f(() => a.value ? e.indeterminateIcon : e.falseIcon), l = f(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return z(() => {
      const u = wt(Os.filterProps(e), ["modelValue"]);
      return o(Os, K(u, {
        modelValue: r.value,
        "onUpdate:modelValue": [(c) => r.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: s.value,
        trueIcon: l.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function lu(e) {
  const {
    t
  } = Zr();
  function n(a) {
    let {
      name: r
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[r], s = e[`onClick:${r}`], l = s && i ? t(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return o(ot, {
      icon: e[`${r}Icon`],
      "aria-label": l,
      onClick: s
    }, null);
  }
  return {
    InputIcon: n
  };
}
const sy = A({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ee(),
  ...Ba({
    transition: {
      component: Wl,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), ly = $()({
  name: "VMessages",
  props: sy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => Re(e.messages)), {
      textColorClasses: r,
      textColorStyles: i
    } = Ct(f(() => e.color));
    return z(() => o(lt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", r.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((s, l) => o("div", {
        class: "v-messages__message",
        key: `${l}-${a.value}`
      }, [n.message ? n.message({
        message: s
      }) : s]))]
    })), {};
  }
}), ou = A({
  focused: Boolean,
  "onUpdate:focused": Be()
}, "focus");
function Vi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct();
  const n = _e(e, "focused"), a = f(() => ({
    [`${t}--focused`]: n.value
  }));
  function r() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: r,
    blur: i
  };
}
const oy = Symbol.for("vuetify:form");
function uy() {
  return Te(oy, null);
}
const cy = A({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...ou()
}, "validation");
function dy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dt();
  const a = _e(e, "modelValue"), r = f(() => e.validationValue === void 0 ? a.value : e.validationValue), i = uy(), s = H([]), l = ie(!0), u = f(() => !!(Re(a.value === "" ? null : a.value).length || Re(r.value === "" ? null : r.value).length)), c = f(() => !!(e.disabled ?? i?.isDisabled.value)), d = f(() => !!(e.readonly ?? i?.isReadonly.value)), g = f(() => e.errorMessages?.length ? Re(e.errorMessages).concat(s.value).slice(0, Math.max(0, +e.maxErrors)) : s.value), h = f(() => {
    let x = (e.validateOn ?? i?.validateOn.value) || "input";
    x === "lazy" && (x = "input lazy");
    const E = new Set(x?.split(" ") ?? []);
    return {
      blur: E.has("blur") || E.has("input"),
      input: E.has("input"),
      submit: E.has("submit"),
      lazy: E.has("lazy")
    };
  }), v = f(() => e.error || e.errorMessages?.length ? !1 : e.rules.length ? l.value ? s.value.length || h.value.lazy ? null : !0 : !s.value.length : !0), y = ie(!1), m = f(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: c.value,
    [`${t}--readonly`]: d.value
  })), p = Me("validation"), _ = f(() => e.name ?? I(n));
  Gs(() => {
    i?.register({
      id: _.value,
      vm: p,
      validate: w,
      reset: P,
      resetValidation: M
    });
  }), xt(() => {
    i?.unregister(_.value);
  }), un(async () => {
    h.value.lazy || await w(!0), i?.update(_.value, v.value, g.value);
  }), sn(() => h.value.input, () => {
    J(r, () => {
      if (r.value != null)
        w();
      else if (e.focused) {
        const x = J(() => e.focused, (E) => {
          E || w(), x();
        });
      }
    });
  }), sn(() => h.value.blur, () => {
    J(() => e.focused, (x) => {
      x || w();
    });
  }), J([v, g], () => {
    i?.update(_.value, v.value, g.value);
  });
  async function P() {
    a.value = null, await We(), await M();
  }
  async function M() {
    l.value = !0, h.value.lazy ? s.value = [] : await w(!0);
  }
  async function w() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const E = [];
    y.value = !0;
    for (const k of e.rules) {
      if (E.length >= +(e.maxErrors ?? 1))
        break;
      const D = await (typeof k == "function" ? k : () => k)(r.value);
      if (D !== !0) {
        if (D !== !1 && typeof D != "string") {
          console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        E.push(D || "");
      }
    }
    return s.value = E, y.value = !1, l.value = x, s.value;
  }
  return {
    errorMessages: g,
    isDirty: u,
    isDisabled: c,
    isReadonly: d,
    isPristine: l,
    isValid: v,
    isValidating: y,
    reset: P,
    resetValidation: M,
    validate: w,
    validationClasses: m
  };
}
const Ri = A({
  id: String,
  appendIcon: ye,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ye,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Be(),
  "onClick:append": Be(),
  ...ee(),
  ...Tt(),
  ...Xu(Lt(), ["maxWidth", "minWidth", "width"]),
  ...Ee(),
  ...cy()
}, "VInput"), xa = $()({
  name: "VInput",
  props: {
    ...Ri()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const {
      densityClasses: i
    } = Yt(e), {
      dimensionStyles: s
    } = Nt(e), {
      themeClasses: l
    } = Ye(e), {
      rtlClasses: u
    } = gn(), {
      InputIcon: c
    } = lu(e), d = dt(), g = f(() => e.id || `input-${d}`), h = f(() => `${g.value}-messages`), {
      errorMessages: v,
      isDirty: y,
      isDisabled: m,
      isReadonly: p,
      isPristine: _,
      isValid: P,
      isValidating: M,
      reset: w,
      resetValidation: x,
      validate: E,
      validationClasses: k
    } = dy(e, "v-input", g), F = f(() => ({
      id: g,
      messagesId: h,
      isDirty: y,
      isDisabled: m,
      isReadonly: p,
      isPristine: _,
      isValid: P,
      isValidating: M,
      reset: w,
      resetValidation: x,
      validate: E
    })), D = f(() => e.errorMessages?.length || !_.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages);
    return z(() => {
      const V = !!(a.prepend || e.prependIcon), N = !!(a.append || e.appendIcon), b = D.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (b || !!a.details);
      return o("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, l.value, u.value, k.value, e.class],
        style: [s.value, e.style]
      }, [V && o("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [a.prepend?.(F.value), e.prependIcon && o(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && o("div", {
        class: "v-input__control"
      }, [a.default?.(F.value)]), N && o("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && o(c, {
        key: "append-icon",
        name: "append"
      }, null), a.append?.(F.value)]), C && o("div", {
        class: "v-input__details"
      }, [o(ly, {
        id: h.value,
        active: b,
        messages: D.value
      }, {
        message: a.message
      }), a.details?.(F.value)])]);
    }), {
      reset: w,
      resetValidation: x,
      validate: E,
      isValid: P,
      errorMessages: v
    };
  }
}), fy = A({
  ...Ri(),
  ...wt(su(), ["inline"])
}, "VCheckbox"), Yi = $()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: fy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = _e(e, "modelValue"), {
      isFocused: i,
      focus: s,
      blur: l
    } = Vi(e), u = dt(), c = f(() => e.id || `checkbox-${u}`);
    return z(() => {
      const [d, g] = Hr(n), h = xa.filterProps(e), v = Es.filterProps(e);
      return o(xa, K({
        class: ["v-checkbox", e.class]
      }, d, h, {
        modelValue: r.value,
        "onUpdate:modelValue": (y) => r.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (y) => {
          let {
            id: m,
            messagesId: p,
            isDisabled: _,
            isReadonly: P,
            isValid: M
          } = y;
          return o(Es, K(v, {
            id: m.value,
            "aria-describedby": p.value,
            disabled: _.value,
            readonly: P.value
          }, g, {
            error: M.value === !1,
            modelValue: r.value,
            "onUpdate:modelValue": (w) => r.value = w,
            onFocus: s,
            onBlur: l
          }), a);
        }
      });
    }), {};
  }
}), uu = A({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: [String],
    default: "$next"
  },
  prevIcon: {
    type: [String],
    default: "$prev"
  },
  modeIcon: {
    type: [String],
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), As = $()({
  name: "VDatePickerControls",
  props: uu(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = f(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), r = f(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = f(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), s = f(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function l() {
      n("click:prev");
    }
    function u() {
      n("click:next");
    }
    function c() {
      n("click:year");
    }
    function d() {
      n("click:month");
    }
    return z(() => o("div", {
      class: ["v-date-picker-controls"]
    }, [o(le, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), o(le, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: r.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), o(Fa, {
      key: "mode-spacer"
    }, null), o("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [o(le, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: l
    }, null), o(le, {
      disabled: s.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: u
    }, null)])])), {};
  }
}), vy = A({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: Be()
}, "VDatePickerHeader"), Is = $()({
  name: "VDatePickerHeader",
  props: vy(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: i
    } = tt(e, "color");
    function s() {
      n("click");
    }
    function l() {
      n("click:append");
    }
    return z(() => {
      const u = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return o("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, r.value],
        style: i.value,
        onClick: s
      }, [a.prepend && o("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), u && o(lt, {
        key: "content",
        name: e.transition
      }, {
        default: () => [o("div", {
          key: e.header,
          class: "v-date-picker-header__content"
        }, [a.default?.() ?? e.header])]
      }), c && o("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? o(Pe, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => [a.append?.()]
      }) : o(le, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: l
      }, null)])]);
    }), {};
  }
}), my = Symbol.for("vuetify:date-options");
function hy(e, t) {
  const n = Bn(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return J(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Xn() {
  const e = Te(my);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Zr();
  return hy(e, t);
}
function gy(e, t) {
  const n = e.toJsDate(t);
  let a = n.getFullYear(), r = new Date(a, 0, 1);
  if (n < r)
    a = a - 1, r = new Date(a, 0, 1);
  else {
    const l = new Date(a + 1, 0, 1);
    n >= l && (a = a + 1, r = l);
  }
  const i = Math.abs(n.getTime() - r.getTime()), s = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(s / 7) + 1;
}
const yy = A({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  }
}, "calendar");
function _y(e) {
  const t = Xn(), n = _e(e, "modelValue", [], (h) => Re(h)), a = f(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), r = _e(e, "year", void 0, (h) => {
    const v = h != null ? Number(h) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), v));
  }, (h) => t.getYear(h)), i = _e(e, "month", void 0, (h) => {
    const v = h != null ? Number(h) : t.getMonth(a.value), y = t.setYear(t.startOfMonth(t.date()), t.getYear(r.value));
    return t.setMonth(y, v);
  }, (h) => t.getMonth(h)), s = f(() => {
    const h = t.getWeekArray(i.value), v = h.flat(), y = 6 * 7;
    if (e.weeksInMonth === "static" && v.length < y) {
      const m = v[v.length - 1];
      let p = [];
      for (let _ = 1; _ <= y - v.length; _++)
        p.push(t.addDays(m, _)), _ % 7 === 0 && (h.push(p), p = []);
    }
    return h;
  });
  function l(h, v) {
    return h.filter((y) => e.weekdays.includes(t.toJsDate(y).getDay())).map((y, m) => {
      const p = t.toISO(y), _ = !t.isSameMonth(y, i.value), P = t.isSameDay(y, t.startOfMonth(i.value)), M = t.isSameDay(y, t.endOfMonth(i.value)), w = t.isSameDay(y, i.value);
      return {
        date: y,
        isoDate: p,
        formatted: t.format(y, "keyboardDate"),
        year: t.getYear(y),
        month: t.getMonth(y),
        isDisabled: g(y),
        isWeekStart: m % 7 === 0,
        isWeekEnd: m % 7 === 6,
        isToday: t.isSameDay(y, v),
        isAdjacent: _,
        isHidden: _ && !e.showAdjacentMonths,
        isStart: P,
        isSelected: n.value.some((x) => t.isSameDay(y, x)),
        isEnd: M,
        isSame: w,
        localized: t.format(y, "dayOfMonth")
      };
    });
  }
  const u = f(() => {
    const h = t.startOfWeek(a.value), v = [];
    for (let m = 0; m <= 6; m++)
      v.push(t.addDays(h, m));
    const y = t.date();
    return l(v, y);
  }), c = f(() => {
    const h = s.value.flat(), v = t.date();
    return l(h, v);
  }), d = f(() => s.value.map((h) => h.length ? gy(t, h[0]) : null));
  function g(h) {
    if (e.disabled) return !0;
    const v = t.date(h);
    return e.min && t.isAfter(t.date(e.min), v) || e.max && t.isAfter(v, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((y) => t.isSameDay(t.date(y), v)) : typeof e.allowedDates == "function" ? !e.allowedDates(v) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: c,
    daysInWeek: u,
    genDays: l,
    model: n,
    weeksInMonth: s,
    weekNumbers: d
  };
}
const cu = A({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...yy()
}, "VDatePickerMonth"), Vs = $()({
  name: "VDatePickerMonth",
  props: cu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = H(), {
      daysInMonth: i,
      model: s,
      weekNumbers: l
    } = _y(e), u = Xn(), c = ie(), d = ie(), g = ie(!1), h = f(() => g.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && s.value.length > 0 && (c.value = s.value[0], s.value.length > 1 && (d.value = s.value[s.value.length - 1]));
    const v = f(() => {
      const _ = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return s.value.length >= _;
    });
    J(i, (_, P) => {
      P && (g.value = u.isBefore(_[0].date, P[0].date));
    });
    function y(_) {
      const P = u.startOfDay(_);
      if (s.value.length === 0 && (c.value = void 0), !c.value)
        c.value = P, s.value = [c.value];
      else if (d.value)
        c.value = _, d.value = void 0, s.value = [c.value];
      else {
        if (u.isSameDay(P, c.value)) {
          c.value = void 0, s.value = [];
          return;
        } else u.isBefore(P, c.value) ? (d.value = u.endOfDay(c.value), c.value = P) : d.value = u.endOfDay(P);
        const M = u.getDiff(d.value, c.value, "days"), w = [c.value];
        for (let x = 1; x < M; x++) {
          const E = u.addDays(c.value, x);
          w.push(E);
        }
        w.push(d.value), s.value = w;
      }
    }
    function m(_) {
      const P = s.value.findIndex((M) => u.isSameDay(M, _));
      if (P === -1)
        s.value = [...s.value, _];
      else {
        const M = [...s.value];
        M.splice(P, 1), s.value = M;
      }
    }
    function p(_) {
      e.multiple === "range" ? y(_) : e.multiple ? m(_) : s.value = [_];
    }
    return () => o("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && o("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && o("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [be(" ")]), l.value.map((_) => o("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [_]))]), o(lt, {
      name: h.value
    }, {
      default: () => [o("div", {
        ref: r,
        key: i.value[0].date?.toString(),
        class: "v-date-picker-month__days"
      }, [!e.hideWeekdays && u.getWeekdays().map((_) => o("div", {
        class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
      }, [_])), i.value.map((_, P) => {
        const M = {
          props: {
            onClick: () => p(_.date)
          },
          item: _,
          i: P
        };
        return v.value && !_.isSelected && (_.isDisabled = !0), o("div", {
          class: ["v-date-picker-month__day", {
            "v-date-picker-month__day--adjacent": _.isAdjacent,
            "v-date-picker-month__day--hide-adjacent": _.isHidden,
            "v-date-picker-month__day--selected": _.isSelected,
            "v-date-picker-month__day--week-end": _.isWeekEnd,
            "v-date-picker-month__day--week-start": _.isWeekStart
          }],
          "data-v-date": _.isDisabled ? void 0 : _.isoDate
        }, [(e.showAdjacentMonths || !_.isAdjacent) && o(Pe, {
          defaults: {
            VBtn: {
              class: "v-date-picker-month__day-btn",
              color: (_.isSelected || _.isToday) && !_.isDisabled ? e.color : void 0,
              disabled: _.isDisabled,
              icon: !0,
              ripple: !1,
              text: _.localized,
              variant: _.isDisabled ? _.isToday ? "outlined" : "text" : _.isToday && !_.isSelected ? "outlined" : "flat",
              onClick: () => p(_.date)
            }
          }
        }, {
          default: () => [a.day?.(M) ?? o(le, M.props, null)]
        })]);
      })])]
    })]);
  }
}), du = A({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), Rs = $()({
  name: "VDatePickerMonths",
  props: du(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Xn(), i = _e(e, "modelValue"), s = f(() => {
      let l = r.startOfYear(r.date());
      return e.year && (l = r.setYear(l, e.year)), al(12).map((u) => {
        const c = r.format(l, "monthShort"), d = !!(e.min && r.isAfter(r.startOfMonth(r.date(e.min)), l) || e.max && r.isAfter(l, r.startOfMonth(r.date(e.max))));
        return l = r.getNextMonth(l), {
          isDisabled: d,
          text: c,
          value: u
        };
      });
    });
    return Rt(() => {
      i.value = i.value ?? r.getMonth(r.date());
    }), z(() => o("div", {
      class: "v-date-picker-months",
      style: {
        height: q(e.height)
      }
    }, [o("div", {
      class: "v-date-picker-months__content"
    }, [s.value.map((l, u) => {
      const c = {
        active: i.value === u,
        color: i.value === u ? e.color : void 0,
        disabled: l.isDisabled,
        rounded: !0,
        text: l.text,
        variant: i.value === l.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(g) {
        if (i.value === g) {
          n("update:modelValue", i.value);
          return;
        }
        i.value = g;
      }
      return a.month?.({
        month: l,
        i: u,
        props: c
      }) ?? o(le, K({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), fu = A({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), Ys = $()({
  name: "VDatePickerYears",
  props: fu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Xn(), i = _e(e, "modelValue"), s = f(() => {
      const u = r.getYear(r.date());
      let c = u - 100, d = u + 52;
      e.min && (c = r.getYear(r.date(e.min))), e.max && (d = r.getYear(r.date(e.max)));
      let g = r.startOfYear(r.date());
      return g = r.setYear(g, c), al(d - c + 1, c).map((h) => {
        const v = r.format(g, "year");
        return g = r.setYear(g, r.getYear(g) + 1), {
          text: v,
          value: h
        };
      });
    });
    Rt(() => {
      i.value = i.value ?? r.getYear(r.date());
    });
    const l = ma();
    return un(async () => {
      await We(), l.el?.scrollIntoView({
        block: "center"
      });
    }), z(() => o("div", {
      class: "v-date-picker-years",
      style: {
        height: q(e.height)
      }
    }, [o("div", {
      class: "v-date-picker-years__content"
    }, [s.value.map((u, c) => {
      const d = {
        ref: i.value === u.value ? l : void 0,
        active: i.value === u.value,
        color: i.value === u.value ? e.color : void 0,
        rounded: !0,
        text: u.text,
        variant: i.value === u.value ? "flat" : "text",
        onClick: () => {
          if (i.value === u.value) {
            n("update:modelValue", i.value);
            return;
          }
          i.value = u.value;
        }
      };
      return a.year?.({
        year: u,
        i: c,
        props: d
      }) ?? o(le, K({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), py = Da("v-picker-title"), vu = A({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...uo()
}, "VPicker"), Ls = $()({
  name: "VPicker",
  props: vu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: r
    } = tt(W(e, "color"));
    return z(() => {
      const i = Pr.filterProps(e), s = !!(e.title || n.title);
      return o(Pr, K(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => [!e.hideHeader && o("div", {
          key: "header",
          class: [a.value],
          style: [r.value]
        }, [s && o(py, {
          key: "picker-title"
        }, {
          default: () => [n.title?.() ?? e.title]
        }), n.header && o("div", {
          class: "v-picker__header"
        }, [n.header()])]), o("div", {
          class: "v-picker__body"
        }, [n.default?.()]), n.actions && o(Pe, {
          defaults: {
            VBtn: {
              slim: !0,
              variant: "text"
            }
          }
        }, {
          default: () => [o("div", {
            class: "v-picker__actions"
          }, [n.actions()])]
        })]
      });
    }), {};
  }
}), Sy = A({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...uu(),
  ...cu({
    weeksInMonth: "static"
  }),
  ...wt(du(), ["modelValue"]),
  ...wt(fu(), ["modelValue"]),
  ...vu({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Qt = $()({
  name: "VDatePicker",
  props: Sy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Xn(), {
      t: i
    } = Zr(), s = _e(e, "modelValue", void 0, (D) => Re(D), (D) => e.multiple ? D : D[0]), l = _e(e, "viewMode"), u = f(() => {
      const D = r.date(s.value?.[0]);
      return D && r.isValid(D) ? D : r.date();
    }), c = H(Number(e.month ?? r.getMonth(r.startOfMonth(u.value)))), d = H(Number(e.year ?? r.getYear(r.startOfYear(r.setMonth(u.value, c.value))))), g = ie(!1), h = f(() => e.multiple && s.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", s.value.length) : s.value[0] && r.isValid(s.value[0]) ? r.format(r.date(s.value[0]), "normalDateWithWeekday") : i(e.header)), v = f(() => {
      let D = r.date();
      return D = r.setDate(D, 1), D = r.setMonth(D, c.value), D = r.setYear(D, d.value), r.format(D, "monthAndYear");
    }), y = f(() => `date-picker-header${g.value ? "-reverse" : ""}-transition`), m = f(() => {
      const D = r.date(e.min);
      return e.min && r.isValid(D) ? D : null;
    }), p = f(() => {
      const D = r.date(e.max);
      return e.max && r.isValid(D) ? D : null;
    }), _ = f(() => {
      if (e.disabled) return !0;
      const D = [];
      if (l.value !== "month")
        D.push("prev", "next");
      else {
        let V = r.date();
        if (V = r.setYear(V, d.value), V = r.setMonth(V, c.value), m.value) {
          const N = r.addDays(r.startOfMonth(V), -1);
          r.isAfter(m.value, N) && D.push("prev");
        }
        if (p.value) {
          const N = r.addDays(r.endOfMonth(V), 1);
          r.isAfter(N, p.value) && D.push("next");
        }
      }
      return D;
    });
    function P() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, F(d.value)), k(c.value);
    }
    function M() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, F(d.value)), k(c.value);
    }
    function w() {
      l.value = "month";
    }
    function x() {
      l.value = l.value === "months" ? "month" : "months";
    }
    function E() {
      l.value = l.value === "year" ? "month" : "year";
    }
    function k(D) {
      l.value === "months" && x(), n("update:month", D);
    }
    function F(D) {
      l.value === "year" && E(), n("update:year", D);
    }
    return J(s, (D, V) => {
      const N = Re(V), b = Re(D);
      if (!b.length) return;
      const C = r.date(N[N.length - 1]), Y = r.date(b[b.length - 1]), U = r.getMonth(Y), j = r.getYear(Y);
      U !== c.value && (c.value = U, k(c.value)), j !== d.value && (d.value = j, F(d.value)), g.value = r.isBefore(C, Y);
    }), z(() => {
      const D = Ls.filterProps(e), V = As.filterProps(e), N = Is.filterProps(e), b = Vs.filterProps(e), C = wt(Rs.filterProps(e), ["modelValue"]), Y = wt(Ys.filterProps(e), ["modelValue"]), U = {
        header: h.value,
        transition: y.value
      };
      return o(Ls, K(D, {
        class: ["v-date-picker", `v-date-picker--${l.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => a.title?.() ?? o("div", {
          class: "v-date-picker__title"
        }, [i(e.title)]),
        header: () => a.header ? o(Pe, {
          defaults: {
            VDatePickerHeader: {
              ...U
            }
          }
        }, {
          default: () => [a.header?.(U)]
        }) : o(Is, K({
          key: "header"
        }, N, U, {
          onClick: l.value !== "month" ? w : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => o(Ie, null, [o(As, K(V, {
          disabled: _.value,
          text: v.value,
          "onClick:next": P,
          "onClick:prev": M,
          "onClick:month": x,
          "onClick:year": E
        }), null), o(Sd, {
          hideOnLeave: !0
        }, {
          default: () => [l.value === "months" ? o(Rs, K({
            key: "date-picker-months"
          }, C, {
            modelValue: c.value,
            "onUpdate:modelValue": [(j) => c.value = j, k],
            min: m.value,
            max: p.value,
            year: d.value
          }), null) : l.value === "year" ? o(Ys, K({
            key: "date-picker-years"
          }, Y, {
            modelValue: d.value,
            "onUpdate:modelValue": [(j) => d.value = j, F],
            min: m.value,
            max: p.value
          }), null) : o(Vs, K({
            key: "date-picker-month"
          }, b, {
            modelValue: s.value,
            "onUpdate:modelValue": (j) => s.value = j,
            month: c.value,
            "onUpdate:month": [(j) => c.value = j, k],
            year: d.value,
            "onUpdate:year": [(j) => d.value = j, F],
            min: m.value,
            max: p.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), by = A({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ee(),
  ...Ba({
    transition: {
      component: Wl
    }
  })
}, "VCounter"), ky = $()({
  name: "VCounter",
  functional: !0,
  props: by(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return z(() => o(lt, {
      transition: e.transition
    }, {
      default: () => [nt(o("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Wn, e.active]])]
    })), {};
  }
}), wy = A({
  floating: Boolean,
  ...ee()
}, "VFieldLabel"), na = $()({
  name: "VFieldLabel",
  props: wy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(nu, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Cy = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mu = A({
  appendInnerIcon: ye,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ye,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ye,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Cy.includes(e)
  },
  "onClick:clear": Be(),
  "onClick:appendInner": Be(),
  "onClick:prependInner": Be(),
  ...ee(),
  ...Xr(),
  ...ft(),
  ...Ee()
}, "VField"), hu = $()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...ou(),
    ...mu()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      themeClasses: i
    } = Ye(e), {
      loaderClasses: s
    } = Jr(e), {
      focusClasses: l,
      isFocused: u,
      focus: c,
      blur: d
    } = Vi(e), {
      InputIcon: g
    } = lu(e), {
      roundedClasses: h
    } = vt(e), {
      rtlClasses: v
    } = gn(), y = f(() => e.dirty || e.active), m = f(() => !e.singleLine && !!(e.label || r.label)), p = dt(), _ = f(() => e.id || `input-${p}`), P = f(() => `${_.value}-messages`), M = H(), w = H(), x = H(), E = f(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: k,
      backgroundColorStyles: F
    } = tt(W(e, "bgColor")), {
      textColorClasses: D,
      textColorStyles: V
    } = Ct(f(() => e.error || e.disabled ? void 0 : y.value && u.value ? e.color : e.baseColor));
    J(y, (Y) => {
      if (m.value) {
        const U = M.value.$el, j = w.value.$el;
        requestAnimationFrame(() => {
          const ce = zr(U), te = j.getBoundingClientRect(), Se = te.x - ce.x, ne = te.y - ce.y - (ce.height / 2 - te.height / 2), we = te.width / 0.75, Le = Math.abs(we - ce.width) > 1 ? {
            maxWidth: q(we)
          } : void 0, Ne = getComputedStyle(U), Qe = getComputedStyle(j), Ot = parseFloat(Ne.transitionDuration) * 1e3 || 150, oe = parseFloat(Qe.getPropertyValue("--v-field-label-scale")), Sn = Qe.getPropertyValue("color");
          U.style.visibility = "visible", j.style.visibility = "hidden", Xt(U, {
            transform: `translate(${Se}px, ${ne}px) scale(${oe})`,
            color: Sn,
            ...Le
          }, {
            duration: Ot,
            easing: ga,
            direction: Y ? "normal" : "reverse"
          }).finished.then(() => {
            U.style.removeProperty("visibility"), j.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const N = f(() => ({
      isActive: y,
      isFocused: u,
      controlRef: x,
      blur: d,
      focus: c
    }));
    function b(Y) {
      Y.target !== document.activeElement && Y.preventDefault();
    }
    function C(Y) {
      Y.key !== "Enter" && Y.key !== " " || (Y.preventDefault(), Y.stopPropagation(), e["onClick:clear"]?.(new MouseEvent("click")));
    }
    return z(() => {
      const Y = e.variant === "outlined", U = !!(r["prepend-inner"] || e.prependInnerIcon), j = !!(e.clearable || r.clear), ce = !!(r["append-inner"] || e.appendInnerIcon || j), te = () => r.label ? r.label({
        ...N.value,
        label: e.label,
        props: {
          for: _.value
        }
      }) : e.label;
      return o("div", K({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": ce,
          "v-field--center-affix": e.centerAffix ?? !E.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": U,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !te(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, k.value, l.value, s.value, h.value, v.value, e.class],
        style: [F.value, e.style],
        onClick: b
      }, n), [o("div", {
        class: "v-field__overlay"
      }, null), o(Sl, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: r.loader
      }), U && o("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && o(g, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), r["prepend-inner"]?.(N.value)]), o("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && o(na, {
        key: "floating-label",
        ref: w,
        class: [D.value],
        floating: !0,
        for: _.value,
        style: V.value
      }, {
        default: () => [te()]
      }), o(na, {
        ref: M,
        for: _.value
      }, {
        default: () => [te()]
      }), r.default?.({
        ...N.value,
        props: {
          id: _.value,
          class: "v-field__input",
          "aria-describedby": P.value
        },
        focus: c,
        blur: d
      })]), j && o(kd, {
        key: "clear"
      }, {
        default: () => [nt(o("div", {
          class: "v-field__clearable",
          onMousedown: (Se) => {
            Se.preventDefault(), Se.stopPropagation();
          }
        }, [o(Pe, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [r.clear ? r.clear({
            ...N.value,
            props: {
              onKeydown: C,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : o(g, {
            name: "clear",
            onKeydown: C,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[Wn, e.dirty]])]
      }), ce && o("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [r["append-inner"]?.(N.value), e.appendInnerIcon && o(g, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), o("div", {
        class: ["v-field__outline", D.value],
        style: V.value
      }, [Y && o(Ie, null, [o("div", {
        class: "v-field__outline__start"
      }, null), m.value && o("div", {
        class: "v-field__outline__notch"
      }, [o(na, {
        ref: w,
        floating: !0,
        for: _.value
      }, {
        default: () => [te()]
      })]), o("div", {
        class: "v-field__outline__end"
      }, null)]), E.value && m.value && o(na, {
        ref: w,
        floating: !0,
        for: _.value
      }, {
        default: () => [te()]
      })])]);
    }), {
      controlRef: x
    };
  }
});
function Py(e) {
  const t = Object.keys(hu.props).filter((n) => !Ur(n) && n !== "class" && n !== "style");
  return rl(e, t);
}
const xy = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ty = A({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ri(),
  ...mu()
}, "VTextField"), Ke = $()({
  name: "VTextField",
  directives: {
    Intersect: Ql
  },
  inheritAttrs: !1,
  props: Ty(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const i = _e(e, "modelValue"), {
      isFocused: s,
      focus: l,
      blur: u
    } = Vi(e), c = f(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = f(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = f(() => ["plain", "underlined"].includes(e.variant));
    function h(E, k) {
      !e.autofocus || !E || k[0].target?.focus?.();
    }
    const v = H(), y = H(), m = H(), p = f(() => xy.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
    function _() {
      m.value !== document.activeElement && m.value?.focus(), s.value || l();
    }
    function P(E) {
      a("mousedown:control", E), E.target !== m.value && (_(), E.preventDefault());
    }
    function M(E) {
      _(), a("click:control", E);
    }
    function w(E) {
      E.stopPropagation(), _(), We(() => {
        i.value = null, ec(e["onClick:clear"], E);
      });
    }
    function x(E) {
      const k = E.target;
      if (i.value = k.value, e.modelModifiers?.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const F = [k.selectionStart, k.selectionEnd];
        We(() => {
          k.selectionStart = F[0], k.selectionEnd = F[1];
        });
      }
    }
    return z(() => {
      const E = !!(r.counter || e.counter !== !1 && e.counter != null), k = !!(E || r.details), [F, D] = Hr(n), {
        modelValue: V,
        ...N
      } = xa.filterProps(e), b = Py(e);
      return o(xa, K({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (C) => i.value = C,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": g.value
        }, e.class],
        style: e.style
      }, F, N, {
        centerAffix: !g.value,
        focused: s.value
      }), {
        ...r,
        default: (C) => {
          let {
            id: Y,
            isDisabled: U,
            isDirty: j,
            isReadonly: ce,
            isValid: te
          } = C;
          return o(hu, K({
            ref: y,
            onMousedown: P,
            onClick: M,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, b, {
            id: Y.value,
            active: p.value || j.value,
            dirty: j.value || e.dirty,
            disabled: U.value,
            focused: s.value,
            error: te.value === !1
          }), {
            ...r,
            default: (Se) => {
              let {
                props: {
                  class: ne,
                  ...we
                }
              } = Se;
              const Le = nt(o("input", K({
                ref: m,
                value: i.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: ce.value,
                disabled: U.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: _,
                onBlur: u
              }, we, D), null), [[cn("intersect"), {
                handler: h
              }, null, {
                once: !0
              }]]);
              return o(Ie, null, [e.prefix && o("span", {
                class: "v-text-field__prefix"
              }, [o("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), r.default ? o("div", {
                class: ne,
                "data-no-activator": ""
              }, [r.default(), Le]) : Pu(Le, {
                class: ne
              }), e.suffix && o("span", {
                class: "v-text-field__suffix"
              }, [o("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: k ? (C) => o(Ie, null, [r.details?.(C), E && o(Ie, null, [o("span", null, null), o(ky, {
          active: e.persistentCounter || s.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, r.counter)])]) : void 0
      });
    }), ui({}, v, y, m);
  }
}), My = { class: "date-picker-desktop elevation-4 mx-auto" }, Dy = {
  __name: "DatePickerDesktop",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), i = f(() => a.getConfig), s = f(() => a.getMaxDate), l = f(() => S(a.getMaxDate).format(L.DATE_FORMAT)), u = f(() => a.getMaxLeftDate), c = f(() => a.isPickerPrimaryActive), d = f(() => a.getPickerPrimary), g = f(() => a.getDateStart), h = f(() => a.getDateUntil), v = f(() => a.getCompareState), y = f(() => a.getPickerCompare), m = f(() => a.getDateCompareStart), p = f(() => a.getDateCompareUntil), _ = f(() => a.getPickerPrimaryLeft), P = f(() => a.getPickerPrimaryRight), M = f(() => a.getPickerPrimaryLeftYear), w = f(() => a.getPickerPrimaryRightYear), x = f(() => new Date(S(a.picker_active_mount).subtract(1, "month").format(L.MONTH_FORMAT)).getMonth()), E = f(() => new Date(S(a.picker_active_mount).format(L.MONTH_FORMAT)).getMonth()), k = t, F = () => {
      a.SET_CONFIG(), k("change", i.value);
    }, D = H(0), V = H(0);
    return J(
      [_, P, d],
      () => {
        D.value += 1, V.value += 1;
      }
    ), (N, b) => (Z(), ze("div", My, [
      o(Qa, { class: "pickers" }, {
        default: O(() => [
          o(de, null, {
            default: O(() => [
              o(ue, { cols: "7" }, {
                default: O(() => [
                  o(de, {
                    class: oa(["picker-main", c.value ? "active" : ""])
                  }, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          (Z(), he(Qt, {
                            key: D.value,
                            class: "my-5 left-date-picker",
                            multiple: "range",
                            "next-icon": "false",
                            color: "primary",
                            locale: "en",
                            max: u.value,
                            "first-day-of-week": "1",
                            "model-value": d.value,
                            "display-value": x.value,
                            month: x.value,
                            year: M.value,
                            "onUpdate:month": b[0] || (b[0] = (C) => I(a).SET_PICKER_DATE_LEFT(C)),
                            "onUpdate:modelValue": b[1] || (b[1] = (C) => I(a).SET_PICKER_PRIMARY(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          (Z(), he(Qt, {
                            key: V.value,
                            class: "my-5 right-date-picker",
                            multiple: "range",
                            "prev-icon": "false",
                            color: "primary",
                            locale: "en",
                            max: s.value,
                            "first-day-of-week": "1",
                            "model-value": d.value,
                            "display-value": d.value,
                            month: E.value,
                            year: w.value,
                            "onUpdate:month": b[2] || (b[2] = (C) => I(a).SET_PICKER_DATE(C)),
                            "onUpdate:modelValue": b[3] || (b[3] = (C) => I(a).SET_PICKER_PRIMARY(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  v.value ? (Z(), he(de, {
                    key: 0,
                    justify: "center",
                    class: "picker-compare"
                  }, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          (Z(), he(Qt, {
                            key: D.value,
                            class: "my-5 left-date-picker picker-compare-selected",
                            multiple: "range",
                            "next-icon": "false",
                            color: "orange-darken-2",
                            locale: "en",
                            max: u.value,
                            "first-day-of-week": "1",
                            "model-value": y.value,
                            "display-value": x.value,
                            month: x.value,
                            year: M.value,
                            "onUpdate:month": b[4] || (b[4] = (C) => I(a).SET_PICKER_DATE_LEFT(C)),
                            "onUpdate:modelValue": b[5] || (b[5] = (C) => I(a).SET_PICKER_COMPARE(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          (Z(), he(Qt, {
                            key: V.value,
                            class: "my-5 right-date-picker picker-compare-selected",
                            multiple: "range",
                            "prev-icon": "false",
                            color: "orange-darken-2",
                            locale: "en",
                            max: s.value,
                            "first-day-of-week": "1",
                            "model-value": y.value,
                            "display-value": E.value,
                            month: E.value,
                            year: w.value,
                            "onUpdate:month": b[6] || (b[6] = (C) => I(a).SET_PICKER_DATE(C)),
                            "onUpdate:modelValue": b[7] || (b[7] = (C) => I(a).SET_PICKER_COMPARE(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              }),
              o(ue, { cols: "5" }, {
                default: O(() => [
                  o(de, null, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            "model-value": g.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[8] || (b[8] = (C) => I(a).SET_DATE_START(C)),
                            onClick: b[9] || (b[9] = (C) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "model-value"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            "model-value": h.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[10] || (b[10] = (C) => I(a).SET_DATE_UNTIL(C)),
                            onClick: b[11] || (b[11] = (C) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(de, { class: "pl-2 pr-1" }, {
                    default: O(() => [
                      o(Ai, {
                        "pinia-store": I(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  }),
                  r.value ? (Z(), he(de, {
                    key: 0,
                    class: "pl-2 pt-6"
                  }, {
                    default: O(() => [
                      o(Yi, {
                        modelValue: v.value,
                        "onUpdate:modelValue": [
                          b[12] || (b[12] = (C) => v.value = C),
                          b[13] || (b[13] = (C) => I(a).FLIP_COMPARE_STATE())
                        ],
                        label: "Compare to the following",
                        class: "compare-label",
                        "hide-details": ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, { key: 1 }, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: m.value,
                            disabled: !v.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[14] || (b[14] = (C) => I(a).SET_COMPARE_START(C)),
                            onClick: b[15] || (b[15] = (C) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: p.value,
                            disabled: !v.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[16] || (b[16] = (C) => I(a).SET_COMPARE_UNTIL(C)),
                            onClick: b[17] || (b[17] = (C) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, {
                    key: 2,
                    class: "pl-2"
                  }, {
                    default: O(() => [
                      o(Ii, {
                        "pinia-store": I(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      o(Ja, { class: "mt-2" }, {
        default: O(() => [
          o(Fa),
          o(le, {
            variant: "outlined",
            class: "px-4 mr-6",
            onClick: b[18] || (b[18] = (C) => I(a).SET_DIALOG_OPENED(!1))
          }, {
            default: O(() => [
              be("Cancel")
            ]),
            _: 1
          }),
          o(le, {
            class: "px-7",
            variant: "elevated",
            color: "primary",
            onClick: b[19] || (b[19] = xu((C) => F(), ["stop"]))
          }, {
            default: O(() => [
              be("Apply")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}, Oy = /* @__PURE__ */ Un(Dy, [["__scopeId", "data-v-da735bb7"]]), Ey = { class: "date-picker-tablet elevation-4 mx-auto" }, Ay = {
  __name: "DatePickerTablet",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), i = f(() => a.getConfig), s = f(() => a.getMaxDate), l = f(() => S(a.getMaxDate).format(L.DATE_FORMAT)), u = f(() => a.isPickerPrimaryActive), c = f(() => a.getPickerPrimary), d = f(() => a.getPickerDate), g = f(() => a.getDateStart), h = f(() => a.getDateUntil), v = f(() => a.getCompareState), y = f(() => a.getPickerCompare), m = f(() => a.getDateCompareStart), p = f(() => a.getDateCompareUntil), _ = t, P = () => {
      a.SET_CONFIG(), _("change", i.value);
    };
    return (M, w) => (Z(), ze("div", Ey, [
      o(Qa, { class: "pickers" }, {
        default: O(() => [
          o(de, null, {
            default: O(() => [
              o(ue, { cols: "6" }, {
                default: O(() => [
                  o(de, {
                    justify: "center",
                    class: oa(["picker-main", u.value ? "active" : ""])
                  }, {
                    default: O(() => [
                      o(ue, { cols: "12" }, {
                        default: O(() => [
                          o(Qt, {
                            multiple: "range",
                            "no-title": "",
                            "first-day-of-week": "1",
                            "v-model:month": new Date(d.value).getMonth(),
                            "v-model:year": new Date(d.value).getFullYear(),
                            max: s.value,
                            "model-value": c.value,
                            class: "picker-compare-left pr-1",
                            color: "primary darken-2 picker-main-selected",
                            "onUpdate:modelValue": w[0] || (w[0] = (x) => I(a).SET_PICKER_PRIMARY(x)),
                            "onUpdate:pickerDate": w[1] || (w[1] = (x) => I(a).SET_PICKER_DATE(x))
                          }, null, 8, ["v-model:month", "v-model:year", "max", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  v.value ? (Z(), he(de, {
                    key: 0,
                    justify: "center",
                    class: "picker-compare"
                  }, {
                    default: O(() => [
                      o(ue, { cols: "12" }, {
                        default: O(() => [
                          o(Qt, {
                            multiple: "range",
                            "no-title": "",
                            "first-day-of-week": "1",
                            class: "picker-main-right",
                            color: "orange-darken-2",
                            max: s.value,
                            "v-model:month": new Date(d.value).getMonth(),
                            "v-model:year": new Date(d.value).getFullYear(),
                            "model-value": y.value,
                            "onUpdate:modelValue": w[2] || (w[2] = (x) => I(a).SET_PICKER_COMPARE(x)),
                            "onUpdate:pickerDate": w[3] || (w[3] = (x) => I(a).SET_PICKER_DATE(x))
                          }, null, 8, ["max", "v-model:month", "v-model:year", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              }),
              o(ue, { cols: "6" }, {
                default: O(() => [
                  o(de, null, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            value: g.value,
                            class: "picker-input",
                            "onUpdate:modelValue": w[4] || (w[4] = (x) => I(a).SET_DATE_START(x)),
                            onClick: w[5] || (w[5] = (x) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "value"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            value: h.value,
                            class: "picker-input",
                            "onUpdate:modelValue": w[6] || (w[6] = (x) => I(a).SET_DATE_UNTIL(x)),
                            onClick: w[7] || (w[7] = (x) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(de, { class: "pl-2 pr-1" }, {
                    default: O(() => [
                      o(Ai, {
                        "pinia-store": I(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  }),
                  r.value ? (Z(), he(de, {
                    key: 0,
                    class: "pl-2 pt-6"
                  }, {
                    default: O(() => [
                      o(Yi, {
                        modelValue: v.value,
                        "onUpdate:modelValue": w[8] || (w[8] = (x) => v.value = x),
                        label: "Compare to the following",
                        class: "compare-label",
                        "hide-details": "",
                        onChange: w[9] || (w[9] = (x) => I(a).FLIP_COMPARE_STATE())
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, { key: 1 }, {
                    default: O(() => [
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: m.value,
                            disabled: !v.value,
                            class: "picker-input",
                            onInput: w[10] || (w[10] = (x) => I(a).SET_COMPARE_START(x)),
                            onClick: w[11] || (w[11] = (x) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: O(() => [
                          o(Ke, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: p.value,
                            disabled: !v.value,
                            class: "picker-input",
                            onInput: w[12] || (w[12] = (x) => I(a).SET_COMPARE_UNTIL(x)),
                            onClick: w[13] || (w[13] = (x) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, {
                    key: 2,
                    class: "pl-2"
                  }, {
                    default: O(() => [
                      o(Ii, {
                        "pinia-store": I(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      o(Ja, { class: "mt-2" }, {
        default: O(() => [
          o(Fa),
          o(le, {
            variant: "outlined",
            class: "px-4 mr-6",
            onClick: w[14] || (w[14] = (x) => I(a).SET_DIALOG_OPENED(!1))
          }, {
            default: O(() => [
              be("Cancel")
            ]),
            _: 1
          }),
          o(le, {
            class: "px-7",
            variant: "elevated",
            color: "primary",
            onClick: w[15] || (w[15] = (x) => P())
          }, {
            default: O(() => [
              be("Apply")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}, Iy = /* @__PURE__ */ Un(Ay, [["__scopeId", "data-v-e4d7f3ae"]]), Vy = A({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...oi({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: $l
    },
    zIndex: 2400
  })
}, "VDialog"), Ry = $()({
  name: "VDialog",
  props: Vy(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = _e(e, "modelValue"), {
      scopeId: i
    } = li(), s = H();
    function l(d) {
      const g = d.relatedTarget, h = d.target;
      if (g !== h && s.value?.contentEl && // We're the topmost dialog
      s.value?.globalTop && // It isn't the document or the dialog body
      ![document, s.value.contentEl].includes(h) && // It isn't inside the dialog body
      !s.value.contentEl.contains(h)) {
        const v = fa(s.value.contentEl);
        if (!v.length) return;
        const y = v[0], m = v[v.length - 1];
        g === y ? m.focus() : y.focus();
      }
    }
    Ue && J(() => r.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", l) : document.removeEventListener("focusin", l);
    }, {
      immediate: !0
    });
    function u() {
      s.value?.contentEl && !s.value.contentEl.contains(document.activeElement) && s.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      n("afterLeave");
    }
    return J(r, async (d) => {
      d || (await We(), s.value.activatorEl?.focus({
        preventScroll: !0
      }));
    }), z(() => {
      const d = Rn.filterProps(e), g = K({
        "aria-haspopup": "dialog",
        "aria-expanded": String(r.value)
      }, e.activatorProps), h = K({
        tabindex: -1
      }, e.contentProps);
      return o(Rn, K({
        ref: s,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: r.value,
        "onUpdate:modelValue": (v) => r.value = v,
        "aria-modal": "true",
        activatorProps: g,
        contentProps: h,
        role: "dialog",
        onAfterEnter: u,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var v = arguments.length, y = new Array(v), m = 0; m < v; m++)
            y[m] = arguments[m];
          return o(Pe, {
            root: "VDialog"
          }, {
            default: () => [a.default?.(...y)]
          });
        }
      });
    }), ui({}, s);
  }
}), Yy = {
  __name: "DatePickerMobile",
  props: {
    namespace: {
      required: !0
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), i = f(() => a.getConfig), s = f(() => S(a.getMaxDate).format(L.DATE_FORMAT)), l = f(() => a.getCompareState), u = f(() => a.getDateCompareStart), c = f(() => a.getDateCompareUntil), d = f(() => a.getDateStart), g = f(() => a.getDateUntil), h = t, v = () => {
      a.SET_CONFIG(), h("change", i.value);
    }, y = H(!0);
    return (m, p) => (Z(), he(Ry, {
      modelValue: y.value,
      "onUpdate:modelValue": p[12] || (p[12] = (_) => y.value = _),
      fullscreen: "",
      "hide-overlay": "",
      transition: "dialog-bottom-transition"
    }, {
      default: O(() => [
        o(ny, { class: "date-picker-mobile elevation-0 d-flex flex-column" }, {
          default: O(() => [
            o(sd, null, {
              default: O(() => [
                o(Qa, null, {
                  default: O(() => [
                    o(de, null, {
                      default: O(() => [
                        o(ue, { cols: "12" }, {
                          default: O(() => [
                            o(de, null, {
                              default: O(() => [
                                o(ue, { cols: "12" }, {
                                  default: O(() => [
                                    o(Ke, {
                                      "hide-details": "",
                                      label: "From",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: s.value,
                                      value: d.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": p[0] || (p[0] = (_) => I(a).SET_DATE_START(_)),
                                      onClick: p[1] || (p[1] = (_) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                                    }, null, 8, ["max", "value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            o(de, null, {
                              default: O(() => [
                                o(ue, { cols: "12" }, {
                                  default: O(() => [
                                    o(Ke, {
                                      "hide-details": "",
                                      label: "To",
                                      type: "date",
                                      dense: "",
                                      variant: "outlined",
                                      max: s.value,
                                      value: g.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": p[2] || (p[2] = (_) => I(a).SET_DATE_UNTIL(_)),
                                      onClick: p[3] || (p[3] = (_) => I(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                                    }, null, 8, ["max", "value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            o(de, {
                              justify: "start",
                              class: "pl-2 pr-1"
                            }, {
                              default: O(() => [
                                o(Ai, {
                                  "pinia-store": I(a),
                                  namespace: e.namespace
                                }, null, 8, ["pinia-store", "namespace"])
                              ]),
                              _: 1
                            }),
                            r.value ? (Z(), he(de, {
                              key: 0,
                              class: "pl-2 pt-0"
                            }, {
                              default: O(() => [
                                o(Yi, {
                                  modelValue: l.value,
                                  "onUpdate:modelValue": p[4] || (p[4] = (_) => l.value = _),
                                  label: "Compare to the following",
                                  class: "compare-label",
                                  onChange: p[5] || (p[5] = (_) => I(a).FLIP_COMPARE_STATE())
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, { key: 1 }, {
                              default: O(() => [
                                o(ue, { cols: "12" }, {
                                  default: O(() => [
                                    o(Ke, {
                                      "hide-details": "",
                                      label: "From",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: s.value,
                                      value: u.value,
                                      disabled: !l.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": p[6] || (p[6] = (_) => I(a).SET_COMPARE_START(_)),
                                      onClick: p[7] || (p[7] = (_) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                                    }, null, 8, ["max", "value", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, { key: 2 }, {
                              default: O(() => [
                                o(ue, { cols: "12" }, {
                                  default: O(() => [
                                    o(Ke, {
                                      "hide-details": "",
                                      label: "To",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: s.value,
                                      value: c.value,
                                      disabled: !l.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": p[8] || (p[8] = (_) => I(a).SET_COMPARE_UNTIL(_)),
                                      onClick: p[9] || (p[9] = (_) => I(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                                    }, null, 8, ["max", "value", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, {
                              key: 3,
                              justify: "start",
                              class: "pl-2"
                            }, {
                              default: O(() => [
                                o(Ii, {
                                  "pinia-store": I(a),
                                  namespace: e.namespace
                                }, null, 8, ["pinia-store", "namespace"])
                              ]),
                              _: 1
                            })) : De("", !0)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                o(Ja, { class: "mt-2" }, {
                  default: O(() => [
                    o(Fa),
                    o(le, {
                      variant: "outlined",
                      class: "px-4 mr-3",
                      onClick: p[10] || (p[10] = (_) => I(a).SET_DIALOG_OPENED(!1))
                    }, {
                      default: O(() => [
                        be("Cancel")
                      ]),
                      _: 1
                    }),
                    o(le, {
                      class: "px-7",
                      variant: "elevated",
                      color: "primary",
                      onClick: p[11] || (p[11] = (_) => v())
                    }, {
                      default: O(() => [
                        be("Apply")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}, Ly = /* @__PURE__ */ Un(Yy, [["__scopeId", "data-v-e6e7c6a4"]]), Ny = ".date-pickers-container[data-v-9620a29b]{position:fixed;top:0;left:0;padding:0;margin:0;z-index:100;width:100vw}", Fy = `.theme--dark input[type=date]::-webkit-calendar-picker-indicator{background:url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="%23FFFFFF" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg>') no-repeat}`, By = { class: "date-selector" }, $y = {
  key: 0,
  class: "date-pickers-container"
}, Wy = {
  __name: "DateRangePicker.ce",
  props: {
    config: {
      type: Object
    },
    namespace: {
      required: !0
    }
  },
  setup(e) {
    const t = e, { mdAndUp: n, sm: a } = Tu();
    let r = t.namespace;
    const i = H(""), s = f(() => r.isDialogOpened);
    return un(() => {
      r.SET_PROPS({ ...t.config }), r.SET_CONFIG();
    }), (l, u) => (Z(), ze("div", By, [
      o(If, K(l.$attrs, {
        class: i.value,
        namespace: e.namespace,
        "pinia-store": I(r),
        onChange: u[0] || (u[0] = (c) => l.$emit("change", c))
      }), null, 16, ["class", "namespace", "pinia-store"]),
      o(Rn, {
        modelValue: s.value,
        "onUpdate:modelValue": u[4] || (u[4] = (c) => s.value = c),
        class: "align-center justify-center",
        style: { "z-index": "2500 !important" }
      }, {
        default: O(() => [
          s.value ? (Z(), ze("div", $y, [
            I(n) ? (Z(), he(Oy, {
              key: 0,
              "pinia-store": I(r),
              namespace: e.namespace,
              onChange: u[1] || (u[1] = (c) => l.$emit("change", c))
            }, null, 8, ["pinia-store", "namespace"])) : I(a) ? (Z(), he(Iy, {
              key: 1,
              "pinia-store": I(r),
              namespace: e.namespace,
              onChange: u[2] || (u[2] = (c) => l.$emit("change", c))
            }, null, 8, ["pinia-store", "namespace"])) : (Z(), he(Ly, {
              key: 2,
              "pinia-store": I(r),
              namespace: e.namespace,
              onChange: u[3] || (u[3] = (c) => l.$emit("change", c))
            }, null, 8, ["pinia-store", "namespace"]))
          ])) : De("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}, Uy = /* @__PURE__ */ Un(Wy, [["styles", [Ny, Fy]], ["__scopeId", "data-v-9620a29b"]]), Hy = {
  debug: !1,
  store: null
  // vuex store
}, Ns = "MMM D, YYYY", Et = "LAST_7_DAYS", Fs = "PREVIOUS_PERIOD", Bs = {
  state: () => ({
    debug: !1,
    // date range picker config props and emitted values
    config: {
      compare: !0
    },
    // layout
    show_calendar_icon: !0,
    show_presets_icon: !0,
    show_compare_date_range: !0,
    // config
    compare: !0,
    dark_theme: !1,
    date_format: Ns,
    // defaults
    default_date_format: Ns,
    default_primary_preset: Et,
    default_compare_preset: Fs,
    // primary date range
    date_start: L[Et][0],
    date_until: L[Et][1],
    picker_active_mount: L[Et][0],
    picker_active_compare_mount: L[Et][0],
    // compare period date range
    compare_start: L.PREVIOUS_PERIOD(L[Et])[0],
    compare_until: L.PREVIOUS_PERIOD(L[Et])[1],
    // primary and compare presets
    primary_preset: Et,
    compare_preset: Fs,
    // primary and compare presets lists
    primary_presets: Object.keys(Ir),
    compare_presets: Object.keys(Vr),
    // layout
    dialog_opened: !1,
    picker_primary_active: !0
  }),
  getters: {
    // dialog window state
    isDialogOpened(e) {
      return e.dialog_opened;
    },
    isCalendarIconShown(e) {
      return e.show_calendar_icon;
    },
    isPresetsIconShown(e) {
      return e.show_presets_icon;
    },
    getPresetLabel() {
      return (e) => e.replaceAll("_", " ");
    },
    getPresetLabelSmall() {
      return (e) => e.replaceAll("_", " ").toLowerCase();
    },
    // compare checkbox state
    getCompareState(e) {
      return e.compare;
    },
    // primary date picker state
    getDateStart(e) {
      return e.date_start;
    },
    getDateUntil(e) {
      return e.date_until;
    },
    getPickerPrimary(e) {
      return L.getDatesBetween(e.date_start, e.date_until);
    },
    // compare date picker state
    getDateCompareStart(e) {
      return e.compare_start;
    },
    getDateCompareUntil(e) {
      return e.compare_until;
    },
    getPickerCompare(e) {
      return L.getDatesBetween(e.compare_start, e.compare_until);
    },
    // vuetify date pickers state
    isPickerPrimaryActive(e) {
      return e.picker_primary_active;
    },
    // parameter getter to format date
    getFormattedDate() {
      return (e, t) => {
        const n = S(e).month(), a = S(e).year(), r = S(t).month(), i = S(t).year();
        let s = "MMM D, YYYY", l = "MMM D, YYYY";
        return a === i && n === r ? (s = "MMM D", l = "D, YYYY") : a === i && (s = "MMM D", l = "MMM D, YYYY"), S(e).format(s) + " - " + S(t).format(l);
      };
    },
    getPickerDate(e) {
      return S(e.picker_active_mount).format(L.MONTH_FORMAT);
    },
    getPickerPrimaryLeft(e) {
      return S(e.picker_active_mount).subtract(1, "month").format(L.MONTH_FORMAT);
    },
    getPickerPrimaryRight(e) {
      return S(e.picker_active_mount).format(L.MONTH_FORMAT);
    },
    getPickerPrimaryLeftMonth(e) {
      return new Date(
        S(e.picker_active_mount).subtract(1, "month").format(L.MONTH_FORMAT)
      ).getMonth();
    },
    getPickerPrimaryRightMonth(e) {
      return new Date(S(e.picker_active_mount).format(L.MONTH_FORMAT)).getMonth();
    },
    getPickerPrimaryLeftYear() {
      return new Date(this.getPickerPrimaryLeft).getFullYear();
    },
    getPickerPrimaryRightYear() {
      return new Date(this.getPickerPrimaryRight).getFullYear();
    },
    getConfig(e) {
      return e.config;
    },
    // input field helpers
    getMaxDate() {
      return new Date(L.TODAY);
    },
    getMaxLeftDate() {
      return L.getLastDayOfMonth(
        new Date(this.getPickerPrimaryLeftYear, this.getPickerPrimaryLeftMonth)
      );
    },
    // preset default
    getPrimaryPreset(e) {
      return e.primary_preset;
    },
    getComparePreset(e) {
      return e.compare_preset;
    },
    // get presets
    getPrimaryPresets(e) {
      return e.primary_presets;
    },
    getComparePresets(e) {
      return e.compare_presets;
    }
  },
  actions: {
    // controls the dialog
    SET_DEBUG(e) {
      this.debug = e;
    },
    // controls the dialog
    SET_DIALOG_OPENED(e) {
      this.dialog_opened = e;
    },
    // controls the dialog
    SET_PRESET_ICON_SHOWN(e) {
      this.show_presets_icon = e;
    },
    // controls the dialog
    SET_CALENDAR_ICON_SHOWN(e) {
      this.show_calendar_icon = e;
    },
    // controls the compare date range visibility
    SET_COMPARE_DATE_RANGE_SHOWN(e) {
      this.show_compare_date_range = e;
    },
    // flips compare period checkbox
    FLIP_COMPARE_STATE() {
      this.compare = !this.compare;
    },
    // flips compare period checkbox
    SET_COMPARE_STATE(e) {
      this.compare = e;
    },
    // set primary picker active
    SET_PICKER_PRIMARY_ACTIVE(e) {
      this.picker_primary_active = e;
    },
    // control date range properties
    SET_DATE_START(e) {
      this.date_start = S(e).format(L.DATE_FORMAT), this.compare_start = L[this.compare_preset]([this.date_start, this.date_until])[0], this.primary_preset = null;
    },
    SET_DATE_UNTIL(e) {
      this.date_until = S(e).format(L.DATE_FORMAT), this.compare_until = L[this.compare_preset]([this.date_start, this.date_until])[1], this.primary_preset = null;
    },
    SET_COMPARE_START(e) {
      this.compare_start = S(e).format(L.DATE_FORMAT), this.compare_preset = null;
    },
    SET_COMPARE_UNTIL(e) {
      this.compare_until = S(e).format(L.DATE_FORMAT), this.compare_preset = null;
    },
    // control selected primary preset
    SET_PRIMARY_PRESET(e) {
      if (this.primary_preset = e, this.picker_active_mount = S(L[e][0]).add(1, "month").format(L.MONTH_FORMAT), this.piker_left = L[e][0], this.date_start = L[e][0], this.date_until = L[e][1], this.compare_preset) {
        const t = L[this.compare_preset]([this.date_start, this.date_until]);
        this.compare_start = t[0], this.compare_until = t[1];
      }
      this.picker_primary_active = !0;
    },
    // control selected compare preset
    SET_COMPARE_PRESET(e) {
      const t = L[e]([this.date_start, this.date_until]);
      this.compare_preset = e, this.compare_start = t[0], this.compare_until = t[1], this.picker_active_mount = S(t[0]).add(1, "month").format(L.MONTH_FORMAT), this.picker_primary_active = !1;
    },
    // load initial component props to the store state
    SET_PROPS(e) {
      if (this.debug && console.log("[ SET_PROPS ]:"), this.compare = this.config.compare, e && [!0, !1].includes(e.compare) && (this.compare = e.compare), this.debug && console.log("- applying compare:", this.compare), e && L[e.primaryPreset] ? (this.primary_preset = e.primaryPreset, this.date_start = L[e && e.primaryPreset][0], this.date_until = L[e && e.primaryPreset][1], this.debug && console.log("- applying primary preset from props:", L[e.primaryPreset])) : (this.primary_preset = null, this.date_start = e && e.dateStart || L[this.default_primary_preset][0], this.date_until = e && e.dateUntil || L[this.default_primary_preset][1], !e.dateStart && !e.dateUntil && (this.primary_preset = this.default_primary_preset, this.debug && console.log(
        "- applying primary date range from default preset:",
        this.date_start,
        "-",
        this.date_until
      )), this.debug && (e.dateStart || e.dateUntil) && console.log(
        "- applying primary date range from props:",
        this.date_start,
        "-",
        this.date_until
      )), e && L[e.comparePreset]) {
        const t = L[e.comparePreset]([this.date_start, this.date_until]);
        this.compare_preset = e.comparePreset, this.compare_start = t[0], this.compare_until = t[1], this.debug && console.log("- applying compare preset:", t);
      } else
        this.compare_start = e && e.compareStart || L[this.default_compare_preset]([this.date_start, this.date_until])[0], this.compare_until = e && e.compareUntil || L[this.default_compare_preset]([this.date_start, this.date_until])[1], !e.compareStart && !e.compareUntil && (this.compare_preset = this.default_compare_preset, this.debug && console.log(
          "- applying compare date range from default preset:",
          this.compare_start,
          "-",
          this.compare_until
        )), this.debug && (e.compareStart || e.compare_until) && console.log(
          "- applying compare date range from props:",
          this.compare_start,
          "-",
          this.compare_until
        );
    },
    // set emitted config from current states
    SET_CONFIG() {
      Object.keys(Ir).forEach((e) => {
        const [t, n] = L[e];
        t === this.date_start && n === this.date_until && (this.primary_preset = e);
      }), Object.keys(Vr).forEach((e) => {
        const [t, n] = L[e]([this.date_start, this.date_until]);
        t === this.compare_start && n === this.compare_until && (this.compare_preset = e);
      }), this.config = {
        compare: this.compare,
        dateStart: this.date_start,
        dateUntil: this.date_until,
        compareStart: this.compare_start,
        compareUntil: this.compare_until,
        primaryPreset: this.primary_preset,
        comparePreset: this.compare_preset
      }, this.debug && console.log("[ SET_CONFIG ]:", this.config), this.dialog_opened = !1;
    },
    // set primary start and until date
    SET_PICKER_PRIMARY(e) {
      this.date_start && this.date_until ? (this.date_start = S(e[0]).format(L.DATE_FORMAT), this.date_until = void 0) : this.date_start && !this.date_until ? this.date_until = S(e[e.length - 1]).format(L.DATE_FORMAT) : this.date_start = S(e[0]).format(L.DATE_FORMAT), this.primary_preset = null;
    },
    // set compere start and until date
    SET_PICKER_COMPARE(e) {
      this.compare_start && this.compare_until ? (this.compare_start = S(e[0]).format(L.DATE_FORMAT), this.compare_until = void 0) : this.compare_start && !this.compare_until ? this.compare_until = S(e[e.length - 1]).format(L.DATE_FORMAT) : this.compare_start = S(e[0]).format(L.DATE_FORMAT), this.compare_preset = null;
    },
    // set active mount
    SET_PICKER_DATE(e) {
      let t = new Date(this.picker_active_mount).getMonth();
      if (e === 0 && t === 11) {
        let n = new Date(this.getPickerPrimaryRight).getFullYear() + 1, a = (/* @__PURE__ */ new Date("")).setFullYear(n);
        this.picker_active_mount = S(new Date(a).setMonth(e)).format(
          L.MONTH_FORMAT
        );
      } else
        this.picker_active_mount = S(new Date(this.getPickerPrimaryRight).setMonth(e)).format(
          L.MONTH_FORMAT
        );
    },
    // set active mount for date piker next to each other
    SET_PICKER_DATE_LEFT(e) {
      let t = new Date(this.picker_active_mount).getMonth();
      if (t - e >= 2 && t > e)
        this.picker_active_mount = S(
          new Date(this.getPickerPrimaryLeft).setMonth(e + 1)
        ).format(L.MONTH_FORMAT);
      else if (e === 11) {
        let n = new Date(this.getPickerPrimaryLeft).getFullYear() - 1, a = (/* @__PURE__ */ new Date("")).setFullYear(n);
        this.picker_active_mount = S(new Date(a).setMonth(e)).format(
          L.MONTH_FORMAT
        );
      } else
        this.picker_active_mount = S(
          new Date(this.getPickerPrimaryLeft).setMonth(e + 1)
        ).format(L.MONTH_FORMAT);
    }
  }
};
var $s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gu = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })($s, function() {
    var n = typeof Promise == "function", a = typeof self == "object" ? self : $s, r = typeof Symbol < "u", i = typeof Map < "u", s = typeof Set < "u", l = typeof WeakMap < "u", u = typeof WeakSet < "u", c = typeof DataView < "u", d = r && typeof Symbol.iterator < "u", g = r && typeof Symbol.toStringTag < "u", h = s && typeof Set.prototype.entries == "function", v = i && typeof Map.prototype.entries == "function", y = h && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), m = v && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), p = d && typeof Array.prototype[Symbol.iterator] == "function", _ = p && Object.getPrototypeOf([][Symbol.iterator]()), P = d && typeof String.prototype[Symbol.iterator] == "function", M = P && Object.getPrototypeOf(""[Symbol.iterator]()), w = 8, x = -1;
    function E(k) {
      var F = typeof k;
      if (F !== "object")
        return F;
      if (k === null)
        return "null";
      if (k === a)
        return "global";
      if (Array.isArray(k) && (g === !1 || !(Symbol.toStringTag in k)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && k === window.location)
          return "Location";
        if (typeof window.document == "object" && k === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && k === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && k === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && k instanceof window.HTMLElement) {
          if (k.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (k.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (k.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var D = g && k[Symbol.toStringTag];
      if (typeof D == "string")
        return D;
      var V = Object.getPrototypeOf(k);
      return V === RegExp.prototype ? "RegExp" : V === Date.prototype ? "Date" : n && V === Promise.prototype ? "Promise" : s && V === Set.prototype ? "Set" : i && V === Map.prototype ? "Map" : u && V === WeakSet.prototype ? "WeakSet" : l && V === WeakMap.prototype ? "WeakMap" : c && V === DataView.prototype ? "DataView" : i && V === m ? "Map Iterator" : s && V === y ? "Set Iterator" : p && V === _ ? "Array Iterator" : P && V === M ? "String Iterator" : V === null ? "Object" : Object.prototype.toString.call(k).slice(w, x);
    }
    return E;
  });
})(gu);
var zy = gu.exports;
const Gy = /* @__PURE__ */ jy(zy), Li = typeof Buffer < "u", Ky = Li && typeof Buffer.from < "u", qy = Li ? (
  /**
   * is value is Buffer?
   *
   * @param {*} value
   * @return {boolean}
   */
  function(t) {
    return Buffer.isBuffer(t);
  }
) : (
  /**
   * return false
   *
   * NOTE: for Buffer unsupported
   *
   * @return {boolean}
   */
  function() {
    return !1;
  }
), Zy = Ky ? (
  /**
   * copy Buffer
   *
   * @param {Buffer} value
   * @return {Buffer}
   */
  function(t) {
    return Buffer.from(t);
  }
) : Li ? (
  /**
   * copy Buffer
   *
   * NOTE: for old node.js
   *
   * @param {Buffer} value
   * @return {Buffer}
   */
  function(t) {
    return new Buffer(t);
  }
) : (
  /**
   * shallow copy
   *
   * NOTE: for Buffer unsupported
   *
   * @param {*}
   * @return {*}
   */
  function(t) {
    return t;
  }
);
function ln(e) {
  return qy(e) ? "Buffer" : Gy(e);
}
const Xy = /* @__PURE__ */ new Set([
  "Arguments",
  "Array",
  "Map",
  "Object",
  "Set"
]);
function Jy(e, t, n = null) {
  switch (n || ln(e)) {
    case "Arguments":
    case "Array":
    case "Object":
      return e[t];
    case "Map":
      return e.get(t);
    case "Set":
      return t;
  }
}
function Rr(e) {
  return Xy.has(e);
}
function Ws(e, t, n, a = null) {
  switch (a || ln(e)) {
    case "Arguments":
    case "Array":
    case "Object":
      e[t] = n;
      break;
    case "Map":
      e.set(t, n);
      break;
    case "Set":
      e.add(n);
      break;
  }
  return e;
}
const Qy = typeof globalThis < "u" && globalThis !== null && globalThis.Object === Object && globalThis, e_ = typeof global < "u" && global !== null && global.Object === Object && global, t_ = typeof self < "u" && self !== null && self.Object === Object && self, vr = Qy || e_ || t_ || Function("return this")();
function n_(e) {
  return e.slice(0);
}
function a_(e) {
  return new Boolean(e.valueOf());
}
function r_(e) {
  return new DataView(e.buffer);
}
function i_(e) {
  return Zy(e);
}
function s_(e) {
  return new Date(e.getTime());
}
function l_(e) {
  return new Number(e);
}
function o_(e) {
  return new RegExp(e.source, e.flags);
}
function u_(e) {
  return new String(e);
}
function yt(e, t) {
  return vr[t].from ? vr[t].from(e) : new vr[t](e);
}
function Ae(e) {
  return e;
}
function Us() {
  return [];
}
function c_() {
  return /* @__PURE__ */ new Map();
}
function d_() {
  return {};
}
function f_() {
  return /* @__PURE__ */ new Set();
}
const v_ = /* @__PURE__ */ new Map([
  // deep copy
  ["ArrayBuffer", n_],
  ["Boolean", a_],
  ["Buffer", i_],
  ["DataView", r_],
  ["Date", s_],
  ["Number", l_],
  ["RegExp", o_],
  ["String", u_],
  // typed arrays
  // TODO: pass bound function
  ["Float32Array", yt],
  ["Float64Array", yt],
  ["Int16Array", yt],
  ["Int32Array", yt],
  ["Int8Array", yt],
  ["Uint16Array", yt],
  ["Uint32Array", yt],
  ["Uint8Array", yt],
  ["Uint8ClampedArray", yt],
  // shallow copy
  ["Array Iterator", Ae],
  ["Map Iterator", Ae],
  ["Promise", Ae],
  ["Set Iterator", Ae],
  ["String Iterator", Ae],
  ["function", Ae],
  ["global", Ae],
  // NOTE: WeakMap and WeakSet cannot get entries
  ["WeakMap", Ae],
  ["WeakSet", Ae],
  // primitives
  ["boolean", Ae],
  ["null", Ae],
  ["number", Ae],
  ["string", Ae],
  ["symbol", Ae],
  ["undefined", Ae],
  // collections
  // NOTE: return empty value, because recursively copy later.
  ["Arguments", Us],
  ["Array", Us],
  ["Map", c_],
  ["Object", d_],
  ["Set", f_]
  // NOTE: type-detect returns following types
  // 'Location'
  // 'Document'
  // 'MimeTypeArray'
  // 'PluginArray'
  // 'HTMLQuoteElement'
  // 'HTMLTableDataCellElement'
  // 'HTMLTableHeaderCellElement'
  // TODO: is type-detect never return 'object'?
  // 'object'
]);
function m_() {
}
function Yr(e, t = null, n = m_) {
  arguments.length === 2 && typeof t == "function" && (n = t, t = null);
  const a = t || ln(e), r = v_.get(a);
  if (a === "Object") {
    const i = n(e, a);
    if (i !== void 0)
      return i;
  }
  return r ? r(e, a) : e;
}
function h_(e, t = {}) {
  typeof t == "function" && (t = {
    customizer: t
  });
  const {
    // TODO: before/after customizer
    customizer: n
    // TODO: max depth
    // depth = Infinity,
  } = t, a = ln(e);
  if (!Rr(a))
    return Lr(e, null, null, null);
  const r = Yr(e, a, n), i = new WeakMap([[e, r]]), s = new WeakSet([e]);
  return Lr(e, r, i, s);
}
function Lr(e, t, n, a, r) {
  const i = ln(e), s = Yr(e, i);
  if (!Rr(i))
    return s;
  let l;
  switch (i) {
    case "Arguments":
    case "Array":
      l = Object.keys(e);
      break;
    case "Object":
      l = Object.keys(e), l.push(...Object.getOwnPropertySymbols(e));
      break;
    case "Map":
    case "Set":
      l = e.keys();
      break;
  }
  for (let u of l) {
    const c = Jy(e, u, i);
    if (a.has(c))
      Ws(t, u, n.get(c), i);
    else {
      const d = ln(c), g = Yr(c, d);
      Rr(d) && (n.set(c, g), a.add(c)), Ws(
        t,
        u,
        Lr(
          c,
          g,
          n,
          a
        ),
        i
      );
    }
  }
  return t;
}
let Hs = {};
const p_ = {
  install: (e, t = {}) => {
    const n = { ...Hy, ...t };
    let a, { piniaStore: r } = n;
    r == null && (r = yu(), e.use(r), n.debug && console.log("[ date picker ]: INFO: using local Store")), n.debug && console.log("[ DateRangePicker ]: Options: ", t), t?.storeNames ? (n.debug && console.log("[ DateRangePicker ]:", t?.storeNames), t.storeNames.forEach((i) => {
      const s = Ni(i.name, h_(Bs));
      s().SET_DEBUG(n.debug), [!0, !1].includes(i?.config?.showPresetsIcon) && s().SET_PRESET_ICON_SHOWN(!!i?.config?.showPresetsIcon), [!0, !1].includes(i?.config?.showCalendarIcon) && s().SET_CALENDAR_ICON_SHOWN(!!i?.config?.showCalendarIcon), [!0, !1].includes(i?.config?.showCompare) && s().SET_COMPARE_DATE_RANGE_SHOWN(!!i?.config?.showCompare), Hs[i.name] = s();
    })) : (n.debug && console.log("[ DateRangePicker ]: "), a = Ni("datePickerStore", Bs), a().SET_DEBUG(n.debug), [!0, !1].includes(n.showPresetsIcon) && a().SET_PRESET_ICON_SHOWN(!!n.showPresetsIcon), [!0, !1].includes(n.showCalendarIcon) && a().SET_CALENDAR_ICON_SHOWN(!!n.showCalendarIcon), [!0, !1].includes(n.showCompare) && a().SET_COMPARE_DATE_RANGE_SHOWN(!!n.showCompare), Hs = a()), e.config.globalProperties.$pinia || (console.log("[ DateRangePicker ]: pinia store not detected - creating..."), e.use(r)), e.directive("mask", Gu), e.component("DateRangePicker", Uy), console.log("[ DateRangePicker ]: wrapper initialization completed...");
  }
};
export {
  Uy as DateRangePicker,
  Hs as datePickerStores,
  p_ as default
};
