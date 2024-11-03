/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WalletAddressForm from "@/components/WalletAddressForm";
import { WalletAddress } from "@prisma/client";

interface CreateEventFormProps {
  walletAddresses: WalletAddress[];
  createEvent: (data: any) => Promise<any>;
  createWalletAddress: (data: any) => Promise<any>;
}

export default function CreateEventForm({
  walletAddresses: initialWalletAddresses,
  createEvent,
  createWalletAddress,
}: CreateEventFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [acts, setActs] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [walletAddresses, setWalletAddresses] = useState<WalletAddress[]>(
    initialWalletAddresses
  );
  const [selectedWalletAddress, setSelectedWalletAddress] = useState<
    string | "add-new"
  >("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedWalletAddress === "add-new") {
      setIsModalOpen(true);
      return;
    }

    try {
      await createEvent({
        name,
        description,
        acts: acts.split(","),
        date,
        time,
        address,
        walletAddress: selectedWalletAddress,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };

  const handleSaveWalletAddress = async (wallet: WalletAddress) => {
    try {
      const newWallet = await createWalletAddress(wallet);
      setWalletAddresses([...walletAddresses, newWallet]);
      setSelectedWalletAddress(newWallet.id);
    } catch (error) {
      console.error("Failed to save wallet address:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Performing Acts (comma separated)"
          value={acts}
          onChange={(e) => setActs(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Event Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <div className="flex flex-col gap-4">
          <label className="text-md text-gray-800">
            Organizer Wallet Address
          </label>
          {walletAddresses.length === 0 && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Wallet Address
            </button>
          )}

          {walletAddresses.map((wallet) => (
            <div key={wallet.id} className="flex items-center gap-2">
              <input
                type="radio"
                id={wallet.id}
                name="walletAddress"
                value={wallet.id}
                checked={selectedWalletAddress === wallet.id}
                onChange={(e) => setSelectedWalletAddress(e.target.value)}
                required
              />
              <label htmlFor={wallet.id}>
                {wallet.alias} - {wallet.address}
              </label>
            </div>
          ))}
          {/* <select
            value={selectedWalletAddress}
            onChange={(e) => setSelectedWalletAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          >
            {/* <option value="">Select a wallet address</option> */}
          {/* {walletAddresses.length === 0 && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Add Wallet Address
                </button>
            )}
            {walletAddresses.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.alias} - {wallet.address}
              </option>
            ))}
          </select> */}
          {/* {selectedWalletAddress === "add-new" && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Wallet Address
            </button>
          )} */}
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900"
        >
          Create Event
        </button>
      </form>
      <WalletAddressForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveWalletAddress}
      />
    </>
  );
}
