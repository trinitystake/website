import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

export default function ValidatorStats() {
  const [loading, setLoading] = useState(true);
  const resultRef = React.useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const API_BASE_URL = "https://proxy.quokkastake.io/raw?url=https://api.sentinel.quokkastake.io/cosmos";
      const sentvaloper = "sentvaloper1mcwvu4vpvfcnxduzpelehmgga282wtc0xux7se";
      const sentvalcons = "sentvalcons1zcgc4klfqgk2x942j6k5agszlnmrd2pt52p5us";

      // Fetch data from all APIs simultaneously using Promise.all
      const [response1, response2, response3, response4] = await Promise.all([
        fetch(API_BASE_URL+"/slashing/v1beta1/signing_infos/"+sentvalcons),
        fetch(API_BASE_URL+"/staking/v1beta1/validators/"+sentvaloper),
        fetch(API_BASE_URL+"/staking/v1beta1/validators/"+sentvaloper+"/delegations?pagination.count_total=true&pagination.limit=1"),
        fetch(API_BASE_URL+"/staking/v1beta1/validators?status=BOND_STATUS_BONDED")
      ]);

      // Extract data from responses
      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();
      const data4 = await response4.json();

      // Cache the data from data4 for future use to avoid redundant fetches
      const cachedData4 = { ...data4 };

      // Find the validator with the given operator address
      const targetValidator = cachedData4.validators.find(
        (validator) => validator.operator_address === sentvaloper
      );

      // Sort the validators by their tokens in descending order 
      cachedData4.validators.sort((a, b) => Number(b.tokens) - Number(a.tokens));

      // Find the rank position of the target validator
      const validatorRank = cachedData4.validators.findIndex(
        (validator) => validator.operator_address === targetValidator.operator_address
      );

      const tokens = parseFloat(data2.validator.tokens) / 1e12;
      const missedBlocks = parseInt(data1.val_signing_info.missed_blocks_counter);
      const rate = parseFloat(data2.validator.commission.commission_rates.rate) * 100;
      const delegators = parseInt(data3.pagination.total);
      const uptimePercentage = parseFloat(((10000 - missedBlocks) / 10000) * 100);

      // Format the data
      const formattedTokens = `${tokens.toFixed(2)}m`;
      const formattedMissedBlocks = missedBlocks.toString();
      const formattedRate = `${rate.toFixed(2)}%`;
      const formattedUptimePercentage = `${uptimePercentage.toFixed(2)}%`;

      // Create individual elements for each piece of information
      const validatorDetailTile = document.createElement("h1");
      validatorDetailTile.innerHTML = `Validator Details`;

      const rankElement = document.createElement("p");
      rankElement.innerHTML = `Rank: ${validatorRank + 1} / 80`;

      const tokensElement = document.createElement("p");
      tokensElement.innerHTML = `Delegation: ${formattedTokens}`;

      const rateElement = document.createElement("p");
      rateElement.innerHTML = `Commission: ${formattedRate}`;

      const delegatorsElement = document.createElement("p");
      delegatorsElement.innerHTML = `Delegators: ${delegators}`;

      const missedBlocksElement = document.createElement("p");
      missedBlocksElement.innerHTML = `Missed Blocks: ${formattedMissedBlocks}`;

      const uptimeElement = document.createElement("p");
      uptimeElement.innerHTML = `Uptime: ${formattedUptimePercentage}`;

      // Get the ref to the result div and append the elements
      const resultDiv = resultRef.current;
      resultDiv.appendChild(validatorDetailTile);
      resultDiv.appendChild(rankElement);
      resultDiv.appendChild(tokensElement);
      resultDiv.appendChild(rateElement);
      resultDiv.appendChild(delegatorsElement);
      resultDiv.appendChild(missedBlocksElement);
      resultDiv.appendChild(uptimeElement);

      setLoading(false); // Data fetching is done, set loading to false
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Handle error and set loading to false
    }
  }

  // Render the Component 
  return (
    <Layout title="Stats" description="Trinity Validator Stat Page">
      <div
        id='validator-stats'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
        ref={resultRef}
      >
        {loading ? (
          <p>Loading Validator Details... ⌛️</p>
        ) : (
          /* Content will be dynamically inserted here */
          null
        )}
      </div>
    </Layout>
  );
}