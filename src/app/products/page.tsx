"use client";

import { Box, Flex, Heading, Text, List, ListItem, ListIcon, useColorModeValue, Button, SimpleGrid } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Hero from "@/components/Hero";
import FlowForgeDashboard from "@/components/mockups/FlowForgeDashboard";
import FlowForgeInterview from "@/components/mockups/FlowForgeInterview";
import FlowForgeReport from "@/components/mockups/FlowForgeReport";
import NovaCRMDashboard from "@/components/mockups/NovaCRMDashboard";
import NovaCRMContact from "@/components/mockups/NovaCRMContact";
import NovaCRMPipeline from "@/components/mockups/NovaCRMPipeline";
import NovaKMSDashboard from "@/components/mockups/NovaKMSDashboard";
import NovaKMSSearch from "@/components/mockups/NovaKMSSearch";
import NovaKMSChat from "@/components/mockups/NovaKMSChat";
import NovaPredictDashboard from "@/components/mockups/NovaPredictDashboard";
import NovaPredictFactory from "@/components/mockups/NovaPredictFactory";
import NovaPredictAlerts from "@/components/mockups/NovaPredictAlerts";
import NovaVoiceDashboard from "@/components/mockups/NovaVoiceDashboard";
import NovaVoiceCallFlow from "@/components/mockups/NovaVoiceCallFlow";

export default function ProductsPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const dirBg = useColorModeValue('gray.50', '#1a2130');

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="Our Products"
        subheading="These aren't side projects. They're production software serving real clients. And they're proof of what we can build for you."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />
      {/* Product Directory */}
      <Box bg={dirBg} py={{ base: 8, md: 10 }} px={{ base: 4, md: 8 }}>
        <Box maxW="1000px" mx="auto">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={4}>
            <Box
              as="a"
              href="#flowforge"
              bg={cardBg}
              p={5}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: '#F25C05', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              <Heading as="h3" size="sm" mb={1} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                FlowForge
              </Heading>
              <Text fontSize="xs" color={bodyTextColor}>
                AI interview &amp; assessment platform for consultants
              </Text>
            </Box>
            <Box
              as="a"
              href="#novacrm"
              bg={cardBg}
              p={5}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: '#F25C05', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              <Heading as="h3" size="sm" mb={1} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                NovaCRM
              </Heading>
              <Text fontSize="xs" color={bodyTextColor}>
                AI-first CRM with deal scoring &amp; full sales stack
              </Text>
            </Box>
            <Box
              as="a"
              href="#novakms"
              bg={cardBg}
              p={5}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: '#F25C05', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              <Heading as="h3" size="sm" mb={1} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                NovaKMS
              </Heading>
              <Text fontSize="xs" color={bodyTextColor}>
                AI-powered knowledge management with RAG search
              </Text>
            </Box>
            <Box
              as="a"
              href="#novapredict"
              bg={cardBg}
              p={5}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: '#F25C05', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              <Heading as="h3" size="sm" mb={1} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                NovaPredict
              </Heading>
              <Text fontSize="xs" color={bodyTextColor}>
                Predictive maintenance with ML &amp; real-time monitoring
              </Text>
            </Box>
            <Box
              as="a"
              href="#novavoice"
              bg={cardBg}
              p={5}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: '#F25C05', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              <Heading as="h3" size="sm" mb={1} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                NovaVoice
              </Heading>
              <Text fontSize="xs" color={bodyTextColor}>
                AI phone agents — 24/7 call answering &amp; booking
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

        {/* FlowForge */}
        <Box mb={16} id="flowforge">
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            FlowForge
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Encode your expertise. Scale your practice.
          </Text>

          {/* Hero screenshot */}
          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <FlowForgeDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            FlowForge is an AI-driven conversation platform built for management consultants, coaches, and educators. It runs structured interviews and assessments in parallel using AI agents — then synthesizes everything into professional, actionable reports.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Instead of spending hours in back-to-back stakeholder interviews, your AI agents handle the conversations simultaneously. You get synthesized insights across all perspectives, ready for analysis and delivery.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <FlowForgeInterview />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">AI interview agent and campaign management</Text>
            </Box>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <FlowForgeReport />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Built for solo consultants, firms, and coaching practices</Text>
            </Box>
          </Flex>

          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Parallel AI Interviews:</b> Run structured conversations with multiple stakeholders at the same time. No more calendar bottlenecks.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Automated Synthesis:</b> AI compiles and cross-references responses into coherent, professional reports.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multiple Methodologies:</b> Leadership coaching, organizational assessments, strategic discovery — bring your framework, FlowForge runs it.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>White-Label Ready:</b> Brand it as your own. Your clients see your name, your logo, your platform.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>No Login Required for Stakeholders:</b> Token-based access means zero friction for participants.
            </ListItem>
          </List>
          <Button
            as="a"
            href="https://flowforge.innovaas.co"
            target="_blank"
            rel="noopener noreferrer"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Visit FlowForge →
          </Button>
        </Box>

        {/* NovaCRM */}
        <Box mb={16} id="novacrm">
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            NovaCRM
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            AI where it counts — not where it&apos;s trendy.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaCRMDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            We built NovaCRM because every CRM we tried bolted AI on as an afterthought. Ours has it at the foundation — AI deal health scoring that flags at-risk opportunities before you lose them, multi-provider AI (Anthropic, OpenAI, Gemini) powering everything from email copy to image generation, and intelligent activity tracking that keeps your team focused on what moves the needle.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            It&apos;s not just a contact database. It&apos;s the full sales and delivery stack: pipeline management, marketing campaigns, custom-built contract signing, project delivery tracking, and a secure client portal — all in one platform, all AI-enhanced.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaCRMContact />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Contact management with campaign tracking</Text>
            </Box>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaCRMPipeline />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Deal pipeline with AI health scoring</Text>
            </Box>
          </Flex>

          <Text fontSize="sm" color={bodyTextColor} mb={6} fontStyle="italic">
            NovaCRM is currently in private beta. Interested in early access? Get in touch.
          </Text>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Company &amp; Contact Management:</b> Centralized contact and company profiles with CSV import, campaign tagging, duplicate detection, and full interaction history across every touchpoint.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Deal &amp; Pipeline Management:</b> Visual pipeline with customizable stages, AI-powered deal health scoring that weighs activity recency, close dates, and probability to flag at-risk deals before you lose them.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Marketing:</b> Brand management, email template builder, campaign orchestration with send tracking and click analytics, AI image generation, and collateral management — all built in, not bolted on.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Document Management &amp; Contract Signing:</b> Custom-built document signing workflow — generate contracts, send for signature, track completion. No third-party signing tools required.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Project Management &amp; Client Portal:</b> Track project delivery from deal close through completion. Secure customer-facing portal lets clients view progress, access documents, and manage preferences.
            </ListItem>
          </List>
          <Button
            as="a"
            href="https://novacrm.innovaas.co"
            target="_blank"
            rel="noopener noreferrer"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Visit NovaCRM →
          </Button>
        </Box>

        {/* NovaKMS */}
        <Box mb={16} id="novakms">
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            NovaKMS
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Stop losing knowledge when people leave. Start finding answers in seconds.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaKMSDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaKMS is an enterprise-grade, AI-powered Knowledge Management System built on RAG technology. Upload your SOPs, training videos, process documents, and meeting recordings — NovaKMS processes them all and makes your entire knowledge base searchable through natural language.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            New employees ask questions in plain English and get accurate, cited answers drawn from your actual documents. Multi-modal processing handles PDFs, DOCX, audio, and video files up to 5GB — with automatic transcription, video frame extraction, and intelligent chunking that preserves context.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaKMSSearch />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Semantic search across documents, videos, and audio</Text>
            </Box>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaKMSChat />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">RAG-powered chat assistant with source citations</Text>
            </Box>
          </Flex>

          <Text fontSize="sm" color={bodyTextColor} mb={6} fontStyle="italic">
            NovaKMS is currently in private beta. Interested in early access? Get in touch.
          </Text>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multi-Modal Document Processing:</b> Upload PDFs, DOCX, audio recordings, and video files up to 5GB. Automatic text extraction, transcription, and video frame analysis.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>AI-Powered Semantic Search:</b> Natural language queries across all content types with results ranked by semantic relevance and similarity scores.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>RAG Chat Assistant:</b> Ask questions in plain English and get accurate answers with source citations linking to specific documents, pages, and timestamps.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Video Intelligence:</b> Automatic scene detection, frame extraction, and Claude Vision analysis turns training videos into searchable, referenceable content.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Employee Onboarding:</b> New hires get instant answers from your entire knowledge base — reducing onboarding time from months to weeks.
            </ListItem>
          </List>
          <Button
            as={Link}
            href="/products/novakms"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Learn More About NovaKMS →
          </Button>
        </Box>

        {/* NovaPredict */}
        <Box mb={16} id="novapredict">
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            NovaPredict
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Predict. Prevent. Perform.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaPredictDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaPredict is a real-time predictive maintenance platform built on Unified Namespace (UNS) architecture and machine learning. It connects directly to your factory floor via MQTT and SparkplugB, ingesting sensor data from every machine — temperature, vibration, pressure, current draw — and runs ML models that detect failure patterns weeks before they happen.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            Instead of reactive maintenance that costs you unplanned downtime, or calendar-based preventive schedules that waste parts and labor, NovaPredict gives you condition-based intelligence. It monitors your machines 24/7, learns their normal behavior, and alerts your maintenance team with specific recommendations — what&apos;s failing, when it&apos;ll fail, and exactly what to do about it.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaPredictFactory />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Live factory floor with machine health status</Text>
            </Box>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaPredictAlerts />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Predictive alerts with actionable recommendations</Text>
            </Box>
          </Flex>

          <Text fontSize="sm" color={bodyTextColor} mb={6} fontStyle="italic">
            NovaPredict is currently in private beta. Interested in early access? Get in touch.
          </Text>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Real-Time Machine Monitoring:</b> Live sensor data from every machine on your floor — temperature, vibration, pressure, current draw — updated every second.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Predictive ML Analytics:</b> Machine learning models trained on your equipment&apos;s behavior detect anomalies and predict failures 2-4 weeks in advance.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Unified Namespace Architecture:</b> Built on MQTT and SparkplugB — a single source of truth for all your operational data, from sensor to boardroom.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Role-Based Dashboards:</b> Executives see OEE and cost savings. Maintenance teams see alerts and work orders. Operators see their machines. Everyone gets what they need.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>50+ Industrial Protocol Support:</b> Connect PLCs, SCADA systems, and IoT sensors across OPC-UA, Modbus, EtherNet/IP, PROFINET, and more.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Single Container Deployment:</b> Runs as a single Docker container on your infrastructure. No cloud dependency, no data leaving your network.
            </ListItem>
          </List>
          <Button
            as="a"
            href="https://novapredict.innovaas.co"
            target="_blank"
            rel="noopener noreferrer"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Visit NovaPredict →
          </Button>
        </Box>

        {/* NovaVoice */}
        <Box mb={16} id="novavoice">
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            NovaVoice
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            AI Phone Agents that answer every call, book appointments, and never miss a business opportunity.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaVoiceDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaVoice is a custom-built AI phone agent that answers your business calls with the intelligence of a trained receptionist and the availability of a machine. It understands why callers are reaching out, books appointments directly into your calendar, answers questions about your services and pricing, and routes complex issues to the right person on your team.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            Unlike robotic IVR menus or generic chatbots, NovaVoice holds natural conversations. Small businesses lose an estimated $126,000 per year from unanswered calls — NovaVoice makes sure your phone is always answered, 24/7/365.
          </Text>

          {/* Secondary screenshot */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaVoiceCallFlow />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Live call transcript with real-time intent detection and automated actions</Text>
            </Box>
          </Flex>

          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>24/7 Call Answering:</b> Every call answered within seconds — day or night. No voicemail, no missed opportunities.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Appointment Booking:</b> Integrated with your calendar. Books, confirms, and reschedules appointments during the call.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Custom-Trained on Your Business:</b> Knows your services, pricing, hours, policies, and FAQs. Sounds like it works for you — because it does.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Intelligent Escalation:</b> Complex issues automatically routed to the right person with full context and call summary.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Real-Time Analytics:</b> Every call transcribed, analyzed for sentiment, and logged. See what your callers want and how your agent performs.
            </ListItem>
          </List>
          <Button
            as={Link}
            href="/products/novavoice"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Learn More About NovaVoice →
          </Button>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Need Something Custom?
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            FlowForge, NovaCRM, NovaKMS, NovaPredict, and NovaVoice started as solutions to real problems. If your business has a problem that off-the-shelf software can&apos;t solve, let&apos;s talk about building something that can.
          </Text>
          <Button
            as={Link}
            href="/contact"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="lg"
          >
            Let&apos;s Talk
          </Button>
        </Box>
      </Box>
    </>
  );
}
