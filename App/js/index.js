// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setName("proba_lab")
                .setLeft("28.19047619047619em")
                .setTop("6.857142857142857em")
                .setWidth("16.152380952380952em")
                .setHeight("2.742857142857143em")
                .setCaption("Привет")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("32.76190476190476em")
                .setTop("19.80952380952381em")
                .setWidth("12.114285714285714em")
                .setHeight("3.580952380952381em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "проверка",
                            "Салют!!!"
                        ],
                        "method" : "pop",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.PageBar")
                .setHost(host,"xui_ui_pagebar1")
                .setLeft("16.761904761904763em")
                .setTop("19.80952380952381em")
                .setCaption("PageBar")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});