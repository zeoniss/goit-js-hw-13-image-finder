import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
import { defaults } from '@pnotify/core';
import { info, alert } from '@pnotify/core';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

function noImagesMessage() {
    info({
        title: 'Sorry',
        text: `We haven't images matching your request`,
        delay: 2000,
    });
}

function noMoreImagesMessage() {
    alert({
        title: `That's all`,
        text: `We don't have any pictures matching your request`,
        delay: 2000,
    });
}

export { noImagesMessage, noMoreImagesMessage };