"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(parseFloat((w / (h * h)).toFixed(1)));
    }
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (bmi < 25) return { label: "Normal Weight", color: "text-green-400" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-red-400" };
  };

  return (
    <div className="glass rounded-2xl p-6 max-w-md mx-auto">
      <h3 className="font-bebas text-2xl text-white mb-1">BMI Calculator</h3>
      <p className="text-gray-400 text-sm mb-5">Check your Body Mass Index</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold py-3 rounded-lg transition-colors"
        >
          Calculate BMI
        </button>

        {bmi !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-dark rounded-lg border border-dark-border text-center"
          >
            <p className="text-gray-400 text-sm">Your BMI</p>
            <p className="text-4xl font-bebas text-white mt-1">{bmi}</p>
            <p className={`font-semibold mt-1 ${getCategory(bmi).color}`}>
              {getCategory(bmi).label}
            </p>
            <div className="mt-3 grid grid-cols-4 gap-1 text-xs text-gray-500">
              <div className="bg-blue-500/20 rounded p-1">{"<18.5"}<br/>Under</div>
              <div className="bg-green-500/20 rounded p-1">18.5–25<br/>Normal</div>
              <div className="bg-yellow-500/20 rounded p-1">25–30<br/>Over</div>
              <div className="bg-red-500/20 rounded p-1">{">30"}<br/>Obese</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
