var providers = {
    "list": [
        {
            "id": "VID Nederland B.V.",
            "streams": [
                {
                    "name": "static",
                    "sources": [
                        {
                            "protocol": "image",
                            "format": "PNG",
                            "location": function (cam) {
                                return "https://vid.nl/ImageCamera/cam_" + cam
                                  + "?dummy=" + (new Date).getTime().toString(10);
                            }
                        }
                    ]
                },
                {
                    "name": "live",
                    "sources": [
                        {
                            "protocol": "MPEG-DASH Media Presentation Description",
                            "format": "XML",
                            "location": function (stream) {
                                return "https://stream.vid.nl:1935/rtplive/"
                                  + stream + ".stream/manifest.mpd";
                            }
                        },
                        {
                            "protocol": "HTTP Live Streaming",
                            "format": "M3U8",
                            "location": function (stream) {
                                return "https://stream.vid.nl:1935/rtplive/"
                                  + stream + ".stream/playlist.m3u8";
                            }
                        },
                        {
                            "protocol": "Real Time Streaming Protocol",
                            "format": "M3U8",
                            "location": function (stream) {
                                return "rtsps://stream.vid.nl:1935/rtplive/"
                                  + stream + ".stream/playlist.m3u8";
                            }
                        }
                    ]
                }
            ]
        },



        {
            "id": "N.V. Nederlandse Apparatenfabriek Nedap",
            "streams": [
                {
                    "name": "static",
                    "sources": [
                        {
                            "protocol": "image",
                            "format": "JPG",
                            "location": function (cam) {
                                return "http://www.nedapstadstoegang.net/cameraoverzicht_almelo/images/"
                                  + cam + ".jpg?id=" + (new Date).valueOf();
                            }
                        }
                    ]
                }
            ]
        }
    ],



    "selectProvider": function (id) {
        for (let provider of this.list) {
            if (provider.id === id) {
                return provider;
            }
        }
        throw new Error("id not found");
    },


    "selectStream": function (id, name) {
        for (let stream of this.selectProvider(id).streams) {
            if (stream.name === name) {
                return stream;
            }
        }
        throw new Error("name not found");
    },


    "selectSource": function (id, name, protocol) {
        for (let source of this.selectStream(id, name).sources) {
            if (source.protocol === protocol) {
                return source;
            }
        }
        throw new Error("protocol not found");
    },


    "checkProvider": function (id) {
        for (let provider of this.list) {
            if (provider.id === id) {
                return true;
            }
        }

        return false;
    },


    "checkStream": function (id, name) {
        if (!this.checkProvider(id)) {
            return false;
        }

        for (let stream of this.selectProvider(id).streams) {
            if (stream.name === name) {
                return true;
            }
        }

        return false;
    },


    "checkSource": function (id, name, protocol) {
        if (!this.checkStream(id, name)) {
            return false;
        }

        for (let source of this.selectStream(id, name).sources) {
            if (source.protocol === protocol) {
                return true;
            }
        }

        return false;
    }
};
