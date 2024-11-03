"use client";

import { useState } from "react";
import { createWalletAddress } from "@/lib/actions";

interface WalletAddressFormProps {
  isOpen: boolean;
  onSave: (wallet: any) => void;
  onClose: () => void;
}

export default function WalletAddressForm({
  isOpen,
  onSave,
  onClose,
}: WalletAddressFormProps) {
  const [alias, setAlias] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const wallet = await createWalletAddress({ alias, address });
      onSave(wallet);
      onClose();
    } catch (error) {
      console.error("Failed to create wallet address:", error);
    }
  };

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSave}
        className="flex flex-col gap-4 w-full max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg"
      >
        <h1 className="text-lg text-gray-900">Register Your Wallet Address</h1>
        <input
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
