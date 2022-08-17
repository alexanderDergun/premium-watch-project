const React = require('react');
const Layout = require('./Layout');

module.exports = function TestPageForDDD() {
    return (
        <Layout>
            <iframe id="view360Iframe" width="100%" scrolling="0" src="https://sketchfab.com/models/8d913bda48f84217902e6829982c494f/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2">
            </iframe>
        </Layout>

    )
}