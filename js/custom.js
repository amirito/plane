/**
 * Created by Amir on 7/11/2015.
 */

(function() {
    var dialog = new DialogEl(document.getElementById('dialog-1'), {
    mainElement : {
    minscale : 0.6,
    minopacity : 0.5,
    //rX : 30,
    rY : 40
    },
    innerElements : {tx : 100, ty : 100},
    // the element is considered out of bounds if its center (x,y) is either
    // x < outofbounds.x or x > win.width-outofbounds.x or
    // y < outofbounds.y or y > win.height - outofbounds.y
    outofbounds: {x : 0, y: 0}
    });

    document.getElementById('trigger-dialog').addEventListener('click', function(ev) {
    dialog.open();
    });
    })();

$(document).ready(function(){



});