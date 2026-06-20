// 1. Mocking the API Data coming from Fathom Ledger Sync
const fathomLedgerData = {
    desk: "European Distillates Desk",
    currency: "USD (Millions)",
    actuals: {
        may: { revenue: 42.5, freight: -12.0, storage: -8.5 },
        june: { revenue: 45.0, freight: -13.5, storage: -8.5 }
    },
    forecast: {
        july: { revenue: 47.2, freight: -15.2, storage: -9.0 },
        august: { revenue: 49.5, freight: -16.8, storage: -9.0 },
        september: { revenue: 51.0, freight: -18.0, storage: -9.5 }
    }
};

// 2. Helper function to calculate Net Operating Margins
function calculateMargin(revenue, freight, storage) {
    return (revenue + freight + storage).toFixed(1);
}

// 3. Simulated AI Insights Engine (Generating targeted feedback)
const aiInsights = {
    cfoSummary: "Margin remains stable around $23M/month, but profitability is plateauing despite 20% revenue growth because freight costs are aggressively outpacing margins.",
    logisticsAction: "Stop buying spot-market freight for August/September volumes. Lock in fixed-rate short-term charter contracts immediately to cap shipping inflation at 31%.",
    tradingStrategy: "Adjust your physical arbitrage pricing models to factor in a minimum 35% freight overhead penalty for Q3 deliveries."
};

// 4. Render everything to the Antigravity UI App View
function renderDashboard() {
    const appContainer = document.querySelector('main');
    if (!appContainer) return;

    appContainer.innerHTML = `
        <section class="card">
            <h2>3-Month Rolling Forecast ($ Millions)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ledger Account</th>
                        <th>May (Act)</th>
                        <th>June (Act)</th>
                        <th>July (Fcst)</th>
                        <th>Aug (Fcst)</th>
                        <th>Sept (Fcst)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Gross Trading Revenue</strong></td>
                        <td>$${fathomLedgerData.actuals.may.revenue}</td>
                        <td>$${fathomLedgerData.actuals.june.revenue}</td>
                        <td>$${fathomLedgerData.forecast.july.revenue}</td>
                        <td>$${fathomLedgerData.forecast.august.revenue}</td>
                        <td>$${fathomLedgerData.forecast.september.revenue}</td>
                    </tr>
                    <tr>
                        <td>Freight & Shipping</td>
                        <td>$${fathomLedgerData.actuals.may.freight}</td>
                        <td>$${fathomLedgerData.actuals.june.freight}</td>
                        <td>$${fathomLedgerData.forecast.july.freight}</td>
                        <td>$${fathomLedgerData.forecast.august.freight}</td>
                        <td>$${fathomLedgerData.forecast.september.freight}</td>
                    </tr>
                    <tr>
                        <td>Terminal Storage</td>
                        <td>$${fathomLedgerData.actuals.may.storage}</td>
                        <td>$${fathomLedgerData.actuals.june.storage}</td>
                        <td>$${fathomLedgerData.forecast.july.storage}</td>
                        <td>$${fathomLedgerData.forecast.august.storage}</td>
                        <td>$${fathomLedgerData.forecast.september.storage}</td>
                    </tr>
                    <tr class="highlight-row">
                        <td><strong>Net Operating Margin</strong></td>
                        <td><strong>$${calculateMargin(fathomLedgerData.actuals.may.revenue, fathomLedgerData.actuals.may.freight, fathomLedgerData.actuals.may.storage)}M</strong></td>
                        <td><strong>$${calculateMargin(fathomLedgerData.actuals.june.revenue, fathomLedgerData.actuals.june.freight, fathomLedgerData.actuals.june.storage)}M</strong></td>
                        <td><strong>$${calculateMargin(fathomLedgerData.forecast.july.revenue, fathomLedgerData.forecast.july.freight, fathomLedgerData.forecast.july.storage)}M</strong></td>
                        <td><strong>$${calculateMargin(fathomLedgerData.forecast.august.revenue, fathomLedgerData.forecast.august.freight, fathomLedgerData.forecast.august.storage)}M</strong></td>
                        <td><strong>$${calculateMargin(fathomLedgerData.forecast.september.revenue, fathomLedgerData.forecast.september.freight, fathomLedgerData.forecast.september.storage)}M</strong></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="ai-container">
            <h2>📢 Cross-Department AI Insights</h2>
            <div class="insight-box">
                <h3>📊 For the CFO & Finance (Hard Numbers)</h3>
                <p>${aiInsights.cfoSummary}</p>
            </div>
            <div class="insight-box">
                <h3>🚢 For Logistics & Operations (Action Plan)</h3>
                <p>${aiInsights.logisticsAction}</p>
            </div>
            <div class="insight-box">
                <h3>🛢️ For Trading Desks (Commercial Strategy)</h3>
                <p>${aiInsights.tradingStrategy}</p>
            </div>
        </section>
    `;
}

// Fire rendering when page content loads
document.addEventListener('DOMContentLoaded', renderDashboard);
