import './assets/madewith-vigotech.scss'

export const VigotechMadeWith = {
  options: {
    lang: 'gl',
    theme: 'light'
  },
  lang: {
    'en' : 'Proudly made with <i class="vt-pinecone"></i> in <strong>Vigo</strong>',
    'gl' : 'Feito con <i class="vt-pinecone"></i> en <strong>Vigo</strong>',
    'es' : 'Hecho con <i class="vt-pinecone"></i> en <strong>Vigo</strong>',
  },
  init() {
    const baseUrl = this.getBaseUrl();
    const linkElement = document.createElement('link');


    /* add attributes */
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', `${baseUrl}madewith-vigotech.css`);

    /* attach to the document head */
    document.getElementsByTagName('head')[0].appendChild(linkElement);

    const widgets = document.querySelectorAll(".vigotech-made-with");

    if (widgets != null) {
      widgets.forEach(widget => {
        const widgetOptions =  {
          lang: widget.getAttribute('data-lang') ? widget.getAttribute('data-lang') : this.options.lang,
          theme: widget.getAttribute('data-theme') ? widget.getAttribute('data-theme') : this.options.theme
        }

        widget.innerHTML = this.lang[widgetOptions.lang] ? this.lang[widgetOptions.lang] : this.lang['gl']
        widget.setAttribute('href', 'https://vigotech.org');

        if (widgetOptions.theme == 'dark') {
          widget.classList.add('vigotech-dark');
        }
      })
    }
  },
  getBaseUrl() {
    const currentScript = document.currentScript;
    const scriptUrl = currentScript.getAttribute('src');

    return scriptUrl.substring(0, scriptUrl.lastIndexOf("/") + 1);
  }
};

(function(VigotechMadeWith) {
  VigotechMadeWith.init()

})(VigotechMadeWith);

