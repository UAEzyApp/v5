import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function RealEstateProcesses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gold">Real Estate Processes</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="off-plan">
          <AccordionTrigger>Off-Plan Property Transactions</AccordionTrigger>
          <AccordionContent>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Definition</h3>
              <p className="mb-4">Purchasing a property that is not yet completed.</p>
              <h3 className="text-lg font-semibold mb-2">Process Steps</h3>
              <ol className="list-decimal pl-5 mb-4">
                <li>Select a property from a developer's project.</li>
                <li>Sign a reservation agreement and pay a deposit.</li>
                <li>Enter into a Sales and Purchase Agreement (SPA).</li>
                <li>Follow the payment plan tied to construction milestones.</li>
                <li>Handover occurs upon project completion and final payment.</li>
              </ol>
              <h3 className="text-lg font-semibold mb-2">Key Points</h3>
              <ul className="list-disc pl-5">
                <li>Understand the escrow account system protecting buyers' funds.</li>
                <li>Be aware of the estimated completion date and potential delays.</li>
              </ul>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="documents">
          <AccordionTrigger>Document Handling Essentials</AccordionTrigger>
          <AccordionContent>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">For Buyers</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Passport copy</li>
                <li>Emirates ID</li>
                <li>Residence visa copy (if applicable)</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">For Sellers</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Title deed</li>
                <li>No Objection Certificate (NOC) from the developer</li>
                <li>Mortgage clearance letter (if applicable)</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Importance</h3>
              <ul className="list-disc pl-5">
                <li>Proper documentation ensures a smooth transaction.</li>
                <li>Reduces the risk of legal disputes.</li>
              </ul>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="contracts">
          <AccordionTrigger>Contract Breakdowns</AccordionTrigger>
          <AccordionContent>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Sales and Purchase Agreement (SPA)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Legal contract outlining terms and conditions of the property sale.</li>
                <li>Includes details on payment schedules, completion dates, and penalties.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Memorandum of Understanding (MOU)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Preliminary agreement stating the buyer's intent to purchase.</li>
                <li>Outlines basic terms before the SPA is signed.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Key Clauses to Understand</h3>
              <ul className="list-disc pl-5">
                <li>Payment Terms</li>
                <li>Default and Termination Clauses</li>
                <li>Dispute Resolution Mechanisms</li>
              </ul>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

