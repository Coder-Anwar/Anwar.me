$( document ).ready( function() {

    var entries = [ 
        
        { label: 'html', url: 'http://niklasknaack.blogspot.de/', target: '_top',  },
        { label: 'html5', url: 'http://www.flashforum.de/', target: '_top', },
        { label: 'css', url: 'http://www.jqueryscript.net/', target: '_top', },
        { label: 'css3', url: 'http://forum.jswelt.de/', target: '_top',  },
        { label: 'bootstrap4', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
        { label: 'bootstrap5', url: 'http://codepen.io/', target: '_top', },
        { label: 'javascript', url: 'http://threejs.org/', target: '_top',}, 
        { label: 'jquery', url: 'http://webglstudio.org/', target: '_top',},
        { label: 'react.js', url: 'http://jscompress.com/', target: '_top',},
        { label: 'node.js', url: 'https://tinypng.com/', target: '_top',  },
        { label: 'wordpress', url: 'http://caniuse.com/', target: '_top', },
        { label: '.liquid', url: 'https://goo.gl/', target: '_top', },
        { label: 'web design', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
        { label: 'PHP', url: 'https://twitter.com/niklaswebdev', target: '_top',  },
        { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_top',  },
        { label: 'rsp design', url: 'http://gulpjs.com/', target: '_top', },
        { label: 'psd to html', url: 'https://www.browsersync.io/', target: '_top',},
        { label: 'GitHub', url: 'https://github.com/', target: '_top', tooltip: 'Amet et quam' },
        { label: 'larvel', url: 'https://www.shadertoy.com/', target: '_top', },
        { label: 'mongodb', url: 'http://gamua.com/starling/', target: '_top',  },
     
    ];

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        margin:'auto',
        left:5,
        radius: '60%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 600,
        speed: 0.5,
        fontFamily: 'roboto',
        fontSize: 20,
        fontColor: '#44',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToCapitalize: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'middle',
        tooltipDiffX: 0,
        tooltipDiffY: 20

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );
