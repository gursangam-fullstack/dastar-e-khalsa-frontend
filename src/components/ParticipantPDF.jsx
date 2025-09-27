// ParticipantPDF.js
import React from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// 1. Create styles for PDF with custom yellow theme
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "rgb(165, 116, 0)",
    padding: 20,
    textAlign: "center",
    marginBottom: 25,
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 15,
  },
  tokenContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
    minWidth: 150,
  },
  tokenLabel: {
    fontSize: 10,
    color: "rgb(165, 116, 0)",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  },
  tokenNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(165, 116, 0)",
    textAlign: "center",
    letterSpacing: 1,
  },
  participantName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
    paddingVertical: 10,
  },
  competitionBadge: {
    backgroundColor: "rgb(165, 116, 0)",
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    alignSelf: "center",
    minWidth: 120,
  },
  detailsContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgb(165, 116, 0)",
    marginBottom: 10,
    marginTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(165, 116, 0)",
    borderBottomStyle: "solid",
  },
  row: {
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 3,
  },
  label: {
    fontWeight: "bold",
    width: 130,
    color: "#555",
    fontSize: 11,
  },
  value: {
    flex: 1,
    color: "#333",
    fontSize: 11,
  },
  contactSection: {
    backgroundColor: "#F8F9FA",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: "rgb(165, 116, 0)",
    borderLeftStyle: "solid",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 10,
    color: "#888",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    borderTopStyle: "solid",
    paddingTop: 10,
  },
  footerLine: {
    width: 50,
    height: 2,
    backgroundColor: "rgb(165, 116, 0)",
    alignSelf: "center",
    marginTop: 5,
  },
});

// 2. Create PDF Document Component
const ParticipantPDFDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header with Token */}
      <View style={styles.header}>
        <Text style={styles.title}>DASTAR-E-KHALSA</Text>
        
        <View style={styles.tokenContainer}>
          <Text style={styles.tokenLabel}>TOKEN NO.</Text>
          <Text style={styles.tokenNumber}>{data.tokenNumber}</Text>
        </View>
      </View>

      {/* Participant Info */}
      <Text style={styles.participantName}>{data.fullName}</Text>
      
      <View style={styles.competitionBadge}>
        <Text>{data.competition}</Text>
      </View>

      {/* Personal Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{data.age}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Father's Name:</Text>
          <Text style={styles.value}>{data.fatherName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{data.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Group:</Text>
          <Text style={styles.value}>{data.group}</Text>
        </View>

        <Text style={styles.sectionTitle}>Academic Information</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Institution:</Text>
          <Text style={styles.value}>{data.schoolOrCollege}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Hometown:</Text>
          <Text style={styles.value}>{data.hometown}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.address}</Text>
        </View>

        {/* Contact Information Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>WhatsApp:</Text>
            <Text style={styles.value}>{data.whatsappNumber}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Valid for Competition • Keep this document with you</Text>
        <View style={styles.footerLine}></View>
      </View>
    </Page>
  </Document>
);

// 3. PDF Download Button Component
const ParticipantPDF = ({ data }) => {
  return (
    <div className="mt-4 text-center">
      <PDFDownloadLink
        document={<ParticipantPDFDocument data={data} />}
        fileName={`${data.fullName}_Registration.pdf`}
        className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-white rounded-lg transition-opacity duration-200 hover:opacity-90"
        style={{
          backgroundColor: "rgb(165, 116, 0)",
          textDecoration: "none",
        }}
      >
        {({ loading }) => (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {loading ? "Generating PDF..." : "Download PDF"}
          </>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default ParticipantPDF;