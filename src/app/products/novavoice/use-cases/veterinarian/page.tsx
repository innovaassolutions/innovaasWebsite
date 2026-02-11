"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function VeterinarianUseCasePage() {
  const headingColor = useColorModeValue("#181f2a", "#fff");
  const bodyTextColor = useColorModeValue("#222", "#d1d5db");
  const cardBg = useColorModeValue("white", "#232b39");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const mutedText = useColorModeValue("#555", "#a0aec0");
  const problemBg = useColorModeValue("gray.50", "#1a2130");
  const highlightBg = useColorModeValue("#fff5ed", "#2a1f14");
  const highlightBorder = useColorModeValue("#fed7aa", "#5c3a1a");
  const transcriptBg = useColorModeValue("#f7fafc", "#1a2233");
  const transcriptBorder = useColorModeValue("#e2e8f0", "#2d3748");

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="NovaVoice for Veterinary Clinics"
        subheading="How Greenfield Animal Hospital stopped losing new patients to unanswered calls — and gave their front desk team room to breathe."
        buttonText="See the Results"
        buttonLink="#results"
      />

      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

        {/* Case Study Header */}
        <Flex gap={2} mb={6} flexWrap="wrap">
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">CASE STUDY</Text>
          </Box>
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">VETERINARY</Text>
          </Box>
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">APPOINTMENT SCHEDULING</Text>
          </Box>
        </Flex>

        <Heading
          as="h2"
          size="xl"
          mb={2}
          color={headingColor}
          fontWeight={900}
          fontFamily="Montserrat, Arial, sans-serif"
        >
          Greenfield Animal Hospital
        </Heading>
        <Text fontSize="lg" fontStyle="italic" color={mutedText} mb={8}>
          A 4-veterinarian practice seeing 60+ patients per day, with a two-person front desk team drowning in phone calls.
        </Text>

        {/* The Challenge */}
        <Box mb={16} bg={problemBg} mx={{ base: 0, md: -8 }} px={{ base: 4, md: 8 }} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Challenge
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Veterinary front desks face a uniquely brutal phone problem. Unlike a dentist or doctor&apos;s office where appointments involve one patient, every vet call requires collecting detailed information about both the pet owner and the animal patient — species, breed, age, weight, vaccination history, symptoms, behavioral notes, and existing medications. A single booking call takes 5-8 minutes. During peak morning hours when Greenfield was receiving 15-20 calls per hour, their two-person front desk simply couldn&apos;t keep up.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>42%</Text>
              <Text fontSize="md" color={bodyTextColor}>
                of morning calls went to voicemail, with fewer than half of those callers ever calling back
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>6.5 min</Text>
              <Text fontSize="md" color={bodyTextColor}>
                average call duration for new patient intake — tying up a receptionist for nearly 7 minutes per booking
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>~30</Text>
              <Text fontSize="md" color={bodyTextColor}>
                new patient inquiries lost per month — at an average lifetime value of $2,800 per client, that&apos;s $84,000/year in missed opportunity
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="md" color={bodyTextColor} mt={6}>
            The front desk staff were stretched thin. Between answering phones, checking in patients, processing payments, and managing the waiting room, they were constantly interrupted and stressed. Hiring a third receptionist would cost $40,000+/year, and even then, the phone problem wouldn&apos;t go away — it would just be slightly less overwhelming. Dr. Patel, the practice owner, needed a fundamentally different approach.
          </Text>
        </Box>

        {/* The Solution */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Solution
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            We built a NovaVoice agent designed specifically for the complexity of veterinary intake. This wasn&apos;t a simple &quot;book an appointment&quot; bot — it needed to collect structured, multi-entity patient data through a natural conversation and deliver it to the practice management system ready for the appointment.
          </Text>

          <Heading
            as="h3"
            size="md"
            mb={4}
            color="#F25C05"
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Collecting Complex Patient Information Through Conversation
          </Heading>
          <Text fontSize="md" color={bodyTextColor} mb={6}>
            A veterinary booking requires two sets of information — the pet owner and the animal patient — plus the reason for the visit, urgency level, and any special handling needs. The NovaVoice agent collects all of this through a conversational flow that feels natural, not like a form being read aloud.
          </Text>

          <List spacing={4} color={bodyTextColor} pl={2} mb={8}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multi-Entity Data Collection:</b> The agent separately tracks owner information (name, phone, email, address) and patient information (pet name, species, breed, age, weight, sex, spay/neuter status). For households with multiple pets, it can handle booking for more than one animal in the same call.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Medical History Intake:</b> The agent asks about vaccination status, current medications, known allergies, chronic conditions, and prior surgical history. It understands veterinary terminology — when a caller says &quot;he&apos;s had his DHPP and rabies but not bordetella,&quot; the agent knows exactly what that means and records it accurately.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Symptom &amp; Urgency Assessment:</b> For sick visits, the agent asks targeted follow-up questions about symptoms, onset, severity, and duration. It uses this information to assign an urgency level — routine, soon, or urgent — and adjusts scheduling accordingly. If symptoms suggest an emergency (difficulty breathing, seizures, suspected poisoning), it immediately provides the emergency clinic number and advises the caller to go now.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Behavioral &amp; Handling Notes:</b> The agent asks whether the pet has any behavioral concerns during vet visits — anxiety, fear-aggression, muzzle requirements — and flags these in the booking so the care team is prepared. This detail, often missed in rushed human calls, directly impacts the safety and quality of the appointment.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Intelligent Scheduling:</b> The agent checks real-time availability across all four veterinarians, accounts for appointment type and duration (wellness exams are 20 minutes, new patient visits are 40), and matches the right vet to the right case. It can accommodate preferences — &quot;Dr. Patel saw Max last time, can we see her again?&quot;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Practice Management System Integration:</b> All collected information is structured and delivered directly into Greenfield&apos;s practice management software. The front desk sees a complete new patient record with the appointment already on the schedule — no re-entry, no callbacks to clarify missing information.
            </ListItem>
          </List>
        </Box>

        {/* Sample Conversation */}
        <Box mb={16}>
          <Heading
            as="h3"
            size="md"
            mb={4}
            color={headingColor}
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            What a New Patient Booking Sounds Like
          </Heading>
          <Box bg={transcriptBg} borderRadius="xl" borderWidth="1px" borderColor={transcriptBorder} p={{ base: 4, md: 8 }} fontSize="md">
            <Flex direction="column" gap={4}>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Good morning, Greenfield Animal Hospital! Are you calling about an existing patient or would you like to schedule a new patient visit?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>We just moved to the area and need to get our dog in for a checkup. He&apos;s also been scratching his ears a lot lately.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Welcome to the area! I&apos;d be happy to get your dog set up as a new patient. Let me collect some information so we&apos;re all ready for the visit. First, can I get your name?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Jennifer Walsh.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Thanks, Jennifer. And the best phone number to reach you?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>555-891-2340.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Got it. Now tell me about your dog — what&apos;s his name, breed, and approximately how old is he?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>His name is Cooper, he&apos;s a golden retriever, about 4 years old, around 75 pounds. He&apos;s neutered. He&apos;s had all his shots — rabies, DHPP, bordetella — but I think he&apos;s due for his annual soon.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Cooper sounds like a great boy. I&apos;ve noted he&apos;s a 4-year-old neutered golden retriever, 75 pounds, with current DHPP, rabies, and bordetella vaccinations — and we&apos;ll check on those dates during the visit. You mentioned he&apos;s been scratching his ears — how long has that been going on, and have you noticed any redness, discharge, or odor?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Maybe a week or so? His left ear looks a little red inside. No smell that I&apos;ve noticed.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Thanks for that detail — I&apos;ll note that for the doctor so they can take a close look. Is Cooper on any medications currently, and does he have any known allergies?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>He&apos;s on a monthly heartworm preventative — Heartgard. No known allergies.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Perfect. One more thing — does Cooper have any anxiety or behavioral concerns during vet visits? Some dogs need a little extra patience and we like to be prepared.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>He gets a little nervous but he&apos;s not aggressive or anything. He just shakes.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Noted — we&apos;ll make sure the team knows Cooper&apos;s a gentle nervous boy so they can take it slow with him. Now for scheduling — I have a new patient appointment available this Thursday at 10:30 AM with Dr. Patel, or Friday at 2:00 PM with Dr. Kim. The visit will be about 40 minutes since it&apos;s a first visit with an ear concern. Which works better for you?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Thursday at 10:30 is perfect.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>You&apos;re all set! Cooper is booked for Thursday at 10:30 AM with Dr. Patel for a new patient wellness exam plus ear evaluation. I&apos;ll send a confirmation text to your number with directions and what to bring — if you have any previous vet records, it&apos;s great to bring those along. We&apos;ll also send a reminder the day before. Is there anything else I can help with?</Text>
              </Box>
              <Box bg={highlightBg} p={3} borderRadius="lg" borderWidth="1px" borderColor={highlightBorder}>
                <Text fontSize="sm" color="#F25C05" fontWeight={600}>
                  Complete patient record created in practice management system — owner info, pet profile, vaccination notes, medication list, symptoms, behavioral flags, and 40-minute appointment with Dr. Patel.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={16} id="results">
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Results
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            After 90 days with NovaVoice handling intake and scheduling calls:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Morning Calls to Voicemail</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">42%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">Under 5%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Only complex cases requiring a technician&apos;s judgment are transferred — everything else resolved by the AI agent
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>New Patient Bookings Per Month</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="lg" fontWeight={700} color={mutedText} fontFamily="Montserrat, Arial, sans-serif">up</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">+62%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                From ~30 lost inquiries/month to capturing nearly every new patient call — converting directly to booked appointments
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Front Desk Phone Time</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="lg" fontWeight={700} color={mutedText} fontFamily="Montserrat, Arial, sans-serif">down</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">-70%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Staff spend their time on in-clinic patients, not phone intake — reducing stress and improving the in-person experience
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Intake Data Completeness</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">60%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">98%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                The agent never forgets to ask about allergies, medications, or behavioral notes — fields that busy receptionists often skip
              </Text>
            </Box>
          </SimpleGrid>

          <Box bg={highlightBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={highlightBorder} mb={8}>
            <Text fontSize="lg" color={bodyTextColor} fontStyle="italic" mb={3}>
              &quot;The biggest surprise wasn&apos;t the number of calls it handled — it was the quality of the intake information. When a patient shows up now, we already know their vaccination history, medications, behavioral notes, and the specific reason for the visit. Our technicians are better prepared, our appointments start on time, and our front desk team can actually focus on the people standing in front of them. That&apos;s been the real game-changer.&quot;
            </Text>
            <Text fontWeight={700} color={headingColor}>
              — Dr. Anita Patel, DVM, Owner, Greenfield Animal Hospital
            </Text>
          </Box>
        </Box>

        {/* Industry Statistics */}
        <Box mb={16} bg={problemBg} mx={{ base: 0, md: -8 }} px={{ base: 4, md: 8 }} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Healthcare Phone Calls — By the Numbers
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">36%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of healthcare consumers prefer voice calls — the highest of any industry surveyed in Hiya&apos;s 2024 report. Pet owners calling about a sick animal have even higher phone preference due to urgency and emotional stakes.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">Only 11%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of medical groups report a majority of patients self-scheduling digitally. In veterinary, the number is even lower — complex patient intake requires human-like conversation, not a web form.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">$126,000</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                lost per year by the average small business from unanswered calls. For veterinary practices with a $2,800 average client lifetime value, losing even 2-3 new patients per week compounds rapidly.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">85%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of callers who reach voicemail never call back. For a worried pet owner, a voicemail isn&apos;t an answer — they&apos;ll call the next clinic on Google until someone picks up.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">391%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                more conversions when businesses respond within one minute. NovaVoice answers every call in under 2 seconds — before the first ring finishes.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">70%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of routine healthcare calls require no human intervention when properly configured AI is in place (Deloitte). Appointment scheduling, intake collection, and basic questions are fully automatable.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">67%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of voicemails are ignored entirely by businesses. Even when a pet owner leaves a message, the odds of a timely callback are poor — and in veterinary medicine, timing can matter.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">75%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of consumers worldwide prefer speaking with a human over AI. NovaVoice is designed to sound and respond like a trained receptionist — natural, empathetic, and knowledgeable about your practice.
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="xs" color={mutedText} mt={4}>
            Sources: Hiya 2024 State of the Call Report, Deloitte Healthcare AI Study, BrightLocal 2025, Invoca 2024 (60M+ calls analyzed)
          </Text>
        </Box>

        {/* What Gets Collected */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            What the Agent Collects Per Call
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Owner Information
              </Heading>
              <List spacing={2} color={bodyTextColor} fontSize="sm">
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Full name and preferred contact method</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Phone number and email address</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Home address (for records and emergencies)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Preferred veterinarian (if any)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />How they heard about the practice</ListItem>
              </List>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Patient (Pet) Profile
              </Heading>
              <List spacing={2} color={bodyTextColor} fontSize="sm">
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Pet name, species, breed, and color</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Age (or date of birth), weight, and sex</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Spay/neuter status</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Vaccination history (rabies, DHPP, bordetella, FVRCP, etc.)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Current medications and preventatives</ListItem>
              </List>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Visit Reason &amp; Medical Context
              </Heading>
              <List spacing={2} color={bodyTextColor} fontSize="sm">
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Primary reason for visit (wellness, sick, injury, follow-up)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Symptom details — onset, duration, severity</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Known allergies and chronic conditions</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Previous surgeries or hospitalizations</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Urgency assessment (routine / soon / urgent)</ListItem>
              </List>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Behavioral &amp; Handling Notes
              </Heading>
              <List spacing={2} color={bodyTextColor} fontSize="sm">
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Anxiety level during vet visits</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Fear-aggression or muzzle requirements</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Special handling needs (e.g., towel wraps for cats)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Diet and feeding notes</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" />Multi-pet household details</ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </Box>

        {/* CTA */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Your Front Desk Shouldn&apos;t Be a Bottleneck
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            Every missed call is a pet that doesn&apos;t get seen and a client your practice never meets. NovaVoice handles the phone so your team can focus on what they do best — caring for animals.
          </Text>
          <Flex gap={4} justify="center" direction={{ base: "column", sm: "row" }}>
            <Button
              as={Link}
              href="/products/novavoice#get-started"
              bg="#F25C05"
              color="#fff"
              _hover={{ bg: "#d94e04" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Get NovaVoice for Your Practice
            </Button>
            <Button
              as={Link}
              href="/products/novavoice"
              variant="outline"
              borderColor="#F25C05"
              color="#F25C05"
              _hover={{ bg: "rgba(242, 92, 5, 0.1)" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Learn More About NovaVoice
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
