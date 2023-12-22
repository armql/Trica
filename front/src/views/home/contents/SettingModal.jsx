import React, { Fragment, useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
import Modal from "../../../components/common/Modal";

export default function SettingModal({ essentials }) {
  const { effect, auto, close } = useToggle();

  useEffect(() => {
    const hasClosedModal = localStorage.getItem("hasClosedModal");
    if (hasClosedModal) {
      setShowModal(false);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("hasClosedModal", "true");
  };

  return (
    <Fragment>
      {!effect && (
        <Modal>
          <div className="w-96 h-96 bg-white mx-4 rounded-lg">
            <div className="flex flex-row p-6">
              <div className="flex flex-col">
                <div className="font-semibold">Choose your location</div>
                <div className="text-sm font-light">
                  Update your location to improve your experience on Trica Store
                </div>
              </div>
              <button
                type="button"
                onClick={auto}
                className="bg-zinc-50 rounded-full w-6 h-6 ring-4 ring-zinc-50 hover:ring-zinc-100 hover:bg-zinc-100 transition"
              >
                {essentials.close}
              </button>
            </div>
            <div className="p-4 flex-col">
              <div className="flex flex-col gap-1">
                <div className="text-sm text-zinc-400 font-medium">Region </div>
                <div className="px-6 py-4 flex flex-row justify-between rounded-full bg-zinc-100 font-semibold items-center">
                  U.S
                  {essentials.chevron_down}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}
