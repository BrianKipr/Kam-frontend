// TableauViz.js
import React, { useEffect, useRef } from 'react';

const Tableauviz = () => {
  const vizRef = useRef(null);

  useEffect(() => {
    const divElement = vizRef.current;
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '700px';
    vizElement.style.height = '477px';
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    // Clean up the script when the component unmounts
    return () => {
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1724329899295"
      style={{ position: 'relative' }}
      ref={vizRef}
    >
      <noscript>
        <a href="#">
          <img
            alt="Overview"
            src="https://public.tableau.com/static/images/RW/RWYHGZJFX/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object
        className="tableauViz"
        style={{ display: 'none' }}
      >
        <param name="host_url" value="https://public.tableau.com/" />
        <param name="embed_code_version" value="3" />
        <param name="path" value="shared/RWYHGZJFX" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/RW/RWYHGZJFX/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
        <param
          name="filter"
          value="_gl=1*s48b0n*_ga*ODY2NjE0ODE2LjE3MjQzMjc0NTQ.*_ga_8YLN0SNXVS*MTcyNDMyNzQ1My4xLjEuMTcyNDMyNzUzMy4wLjAuMA"
        />
      </object>
    </div>
  );
};

export default Tableauviz;
