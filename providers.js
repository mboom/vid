"providers" = [
    {
        "id": "VID Nederland B.V.",
        "streams": [
            {
                "name": "static",
                "sources": [
                    {
                        "protocols": "image",
                        "format": "PNG",
                        "location": function (cam) {
                            return "https://vid.nl/ImageCamera/cam_" + cam + "?dummy=" + (new Date).getTime().toString(10);
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
                            return "https://stream.vid.nl:1935/rtplive/" + stream + ".stream/manifest.mpd";
                        }
                    },
                    {
                        "protocol": "HTTP Live Streaming",
                        "format": "M3U8",
                        "location": function (stream) {
                            return "https://stream.vid.nl:1935/rtplive/" + stream + ".stream/playlist.m3u8";
                        }
                    },
                    {
                        "protocol": "Real Time Streaming Protocol",
                        "format": "M3U8",
                        "location": function (stream) {
                            return "https://stream.vid.nl:1935/rtplive/" + stream + ".stream/playlist.m3u8";
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
                            return "http://www.nedapstadstoegang.net/cameraoverzicht_almelo/images/" + cam + ".jpg?id=" + (new Date).valueOf();
                        }
                    }
                ]
            }
        ]
    }
];
