const tlg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tlg.close()
    }

    const onToggleButton = () => {
        if(tlg.MainButton.isVisible) {
            tlg.MainButton.hide();
        } else {
            tlg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tlg,
        user: tlg.initDataUnsafe?.user,
        queryId: tlg.initDataUnsafe?.query_id,
    }
}