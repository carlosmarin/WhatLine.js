/**
 * WhatLine.js
 * Simple & Better Way To Detect & Show Message To Online/Offline Users (Cross-Browser)
 * 
 * Built By Reza Farhadain 
 * http://saalam.ir
 *
 * Copyright (C) 2013
 * Published Under MIT License
*/

/**
 * Main class
 *
 * @api public
*/
var WhatLine = 
{
	/**
	 * Xml Http Request Library
	 * Cross-Browser
	 *
	 * @return {Object} XHR Object
	 * @api private
	*/
    _xhrLib: function() {
        var xmlHttp;
        try
        {
            xmlHttp = new XMLHttpRequest();
            return xmlHttp;
        }
        catch(e)
        {
            try
            {
                xmlHttp = new ActiveXObject('Msxml2.XMLHTTP'); 
                return xmlHttp;
            }
            catch(e)
            {
                try
                {
                    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
                    return xmlHttp;
                }
                catch(e)
                {
                    throw new Error('Your browser can\'t support XHR');
                    return false;
                }
            }
        }
    },

    /**
     * Test Internet Connection
     * 
     * @api public
     * @return {Boolean} Internet Connection
    */
	testConnection: function () {
        var xmlHttp = this._xhrLib();
        var testUrl = 'http://google.com';

        xmlHttp.onreadystatechange = function ()
        {
            if (xmlHttp.readyState !== 0)
            {
                return true;
            }
        }

        xmlHttp.open('GET', testUrl, true);
        xmlHttp.send();
	},

    /**
     * Detect And Show Message To Offline Users
     *
     * @api public
    */
	detect: function ()
	{
		var offlineMsg = document.querySelector('[offline]'),
            onlineMsg  = document.querySelector('[online]');

        offlineMsg.style.display = 'none';
        onlineMsg.style.display = 'none';
        
        if(typeof navigator.onLine == 'boolean')
        {
            if (!navigator.onLine)
            {
        	    document.body.innerHTML = msg.innerHTML;
            }
            else if (navigator.onLine)
            {
                onlineMsg.style.display = 'inline';
            }
        }
        else
        {
            if (!this.testConnection())
            {
                document.body.innerHTML = msg.innerHTML;
            }
            else {
                onlineMsg.style.display = 'inline';
            }
        }
	}
}

// Init
WhatLine.detect();

/**
 * Callback Model
 *
 * @param {Function} Callback
 * @api public
*/
function offLine (callback)
{
    if(typeof navigator.onLine == 'boolean')
    {
        if (!navigator.onLine)
        {
            callback();
        }
    }
    else
    {
        if (!WhatLine.testConnection())
        {
            callback();
        }
    }
}

/**
 * Callback Model
 *
 * @param {Function} Callback
 * @api public
*/
function onLine (callback)
{
    if(typeof navigator.onLine == 'boolean')
    {
        if (navigator.onLine)
        {
            callback();
        }
    }
    else
    {
        if (WhatLine.testConnection())
        {
            callback();
        }
    }
}
